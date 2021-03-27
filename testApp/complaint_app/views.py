from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ComplaintViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer(queryset, many=True)
    
    def list(self, request):
        # Get all complaints from the user's district
        return Response(self.serializer_class.data)


class OpenCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    
    queryset = Complaint.objects.filter(closedate__isnull=True)
    serializer_class = ComplaintSerializer(queryset, many=True)
    
    def list(self, request):
        # Get only the open complaints from the user's district
        return Response(self.serializer_class.data)


class ClosedCasesViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    queryset = Complaint.objects.filter(closedate__isnull=False)
    serializer_class = ComplaintSerializer(queryset, many=True)
    
    def list(self, request):
        # Get only complaints that are close from the user's district
        return Response(self.serializer_class.data)


class TopComplaintTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']

    # Dict to store complaint types & account district
    complaintTypesByCode = {}

    # Get non null complaint types & account district
    complaints = Complaint.objects.values('complaint_type','account').filter(complaint_type__isnull=False)
    for one_complaint in complaints :
        if one_complaint['account'] not in complaintTypesByCode :
            complaintTypesByCode[one_complaint['account']] = {one_complaint['complaint_type']: 1}
        else:
            if one_complaint['complaint_type'] in complaintTypesByCode[one_complaint['account']]:
                complaintTypesByCode[one_complaint['account']][one_complaint['complaint_type']] += 1
            else:
                 complaintTypesByCode[one_complaint['account']][one_complaint['complaint_type']] = 1
   
    # Sorting in descending order, the complaint types for each district
    for one_district in complaintTypesByCode:
        complaintTypesByCode[one_district] = sorted(complaintTypesByCode[one_district].items(), key = lambda k:(k[1], k[0]), reverse=True)

    def list(self, request):
        # Get the top 3 complaint types from the user's district
        return Response(self.complaintTypesByCode)

