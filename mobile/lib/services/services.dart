
import 'dart:io';

_getUserApi() async {
  var httpClient = new HttpClient();
  var uri = new Uri.https('yourserverurl.com', '');
  var request = await httpClient.getUrl(uri);
  var response = await request.close();
  var responseBody = await response.transform(UTF8.decoder).join();
  return responseBody;
} 