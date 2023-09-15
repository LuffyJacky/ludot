$(function () {
    GetAuthorizationHeader();
    
    GetApiResponse();    
});

function GetAuthorizationHeader() {    
    const parameter = {
        grant_type:"client_credentials",
        client_id: "luffyjacky-9b49b8de-d875-4cec",
        client_secret: "5ff4eee8-9107-445a-bb05-ccb1a2770b66"
    };
    
    let auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
        
    $.ajax({
        type: "POST",
        url: auth_url,
        crossDomain:true,
        dataType:'JSON',                
        data: parameter,
        async: false,       
        success: function(data){            
            $("#accesstoken").text(JSON.stringify(data));                            
        },
        error: function (xhr, textStatus, thrownError) {
            
        }
    });          
}

function GetApiResponse(){    
    let accesstokenStr = $("#accesstoken").text();    

    let accesstoken = JSON.parse(accesstokenStr);    


    var arr1 = []
    
    if(accesstoken !=undefined){
        $.ajax({
            type: 'GET',
            //  url: 'https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taichung/35?%24filter=%28RouteUID%20eq%20%27TXG35%27%29%20and%20%28StopUID%20eq%20%27TXG2851%27%29&%24top=30&%24format=JSON',
             url: 'https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taichung/35?%24filter=%28RouteUID%20eq%20%27TXG35%27%29%20and%20%28StopUID%20eq%20%27TXG2851%27%29&%24top=30&%24format=JSON',

            headers: {
                "authorization": "Bearer " + accesstoken.access_token,                
              },            
            async: false,
            success: function (Data) {
                arr1 = Data;
                console.log(arr1)
                let ans=document.querySelector("#ans")

                for(let i=0;i<arr1.length;i++){
                    let arr2=arr1[i];
                    console.log(arr2)
                    if(arr2.StopStatus = 1||0 ){
                        console.log(arr2.StopStatus);
                        console.log(arr2.EstimateTime);
                        console.log(arr2.PlateNumb);
                        $('#apireponse3').text(arr2.EstimateTime / '60'+'分鐘ㄛ');
                        $('#apireponse4').text(arr2.PlateNumb);
                    } else{
                        $('#apireponse3').text("蘇姬下班ㄌ");
                    }
                }

                $('#apireponse').text(JSON.stringify(Data));
                $('#apireponse2').text(JSON.stringify(arr1));
      
                console.log('Data', Data);

            },
            error: function (xhr, textStatus, thrownError) {
                console.log('errorStatus:',textStatus);
                console.log('Error:',thrownError);
            }
        });
    }

}




