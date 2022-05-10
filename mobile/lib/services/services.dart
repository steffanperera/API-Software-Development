import 'dart:io';

_getUserApi() async {
  var httpClient = new HttpClient();
  var uri = new Uri.https('server.js', '../backend/server.js');
  var request = await httpClient.getUrl(uri);
  var response = await request.close();
  var responseBody = await response.transform(UTF8.decoder).join();
  return responseBody;
}
