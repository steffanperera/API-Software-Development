import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile/screens/welcome_screen.dart';

class CompanyLogin extends StatefulWidget {
  const CompanyLogin({Key? key}) : super(key: key);

  @override
  State<CompanyLogin> createState() => _CompanyLoginState();
}

class _CompanyLoginState extends State<CompanyLogin> {
  final _formKey = GlobalKey<FormState>();

  TextEditingController uname = TextEditingController();
  TextEditingController password = TextEditingController();

  bool isHiddenPassword = true;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        systemOverlayStyle: SystemUiOverlayStyle.light,
        elevation: 0,
        leading: Builder(
          builder: (BuildContext context) {
            return IconButton(
              icon: const Icon(Icons.arrow_back),
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) {
                      return const WelcomeScreen();
                    },
                  ),
                ),
              },
              color: Colors.black,
            );
          },
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child: SizedBox(
              width: size.width * 0.8,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const SizedBox(height: 100),
                  const Text(
                    "Company Login",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 40),
                  const Text(
                    "Login to access\n company account",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 22,
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 144),
                  Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        // username
                        Container(
                          margin: const EdgeInsets.symmetric(vertical: 6),
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 7),
                          width: size.width * 0.8,
                          decoration: BoxDecoration(
                            color: const Color(0xFFF5F5F5),
                            borderRadius: BorderRadius.circular(0),
                          ),
                          child: TextFormField(
                            controller: uname,
                            cursorColor: Colors.black,
                            decoration: const InputDecoration(
                              hintText: "Company username",
                              hintStyle: TextStyle(
                                color: Color(0xFFB0B0B0),
                              ),
                              border: InputBorder.none,
                            ),
                            // The validator receives the text that the user has entered.
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter some text';
                              }
                              return null;
                            },
                          ),
                        ),
                        // password field
                        Container(
                          margin: const EdgeInsets.symmetric(vertical: 6),
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 7),
                          width: size.width * 0.8,
                          decoration: BoxDecoration(
                            color: const Color(0xFFF5F5F5),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: TextFormField(
                            controller: password,
                            obscureText: isHiddenPassword,
                            cursorColor: Colors.black,
                            decoration: InputDecoration(
                              hintText: "Password",
                              hintStyle: const TextStyle(
                                color: Color(0xFFB0B0B0),
                              ),
                              suffixIcon: InkWell(
                                onTap: _togglePasswordView,
                                child: const Icon(
                                  Icons.visibility,
                                  color: Color(0xFFB0B0B0),
                                ),
                              ),
                              border: InputBorder.none,
                            ),
                            // The validator receives the text that the user has entered.
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter some text';
                              }
                              return null;
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  // btn - login
                  Container(
                    margin: const EdgeInsets.symmetric(vertical: 10),
                    width: size.width * 0.8,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(0),
                      child: TextButton(
                        style: TextButton.styleFrom(
                          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                          backgroundColor: Colors.black,
                        ),
                        onPressed: () => {
                          // if (_formKey.currentState!.validate()) {checkAccount(uname.text, password.text)}
                        },
                        child: const Text(
                          "Log In",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        "Can't access account? ",
                        style: TextStyle(
                          color: Colors.black87,
                          fontFamily: 'Montserrat',
                          fontSize: 16,
                        ),
                      ),
                      GestureDetector(
                        child: const Text(
                          "Support",
                          style: TextStyle(
                            color: Colors.black,
                            fontFamily: 'Montserrat',
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        onTap: () => {},
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _togglePasswordView() {
    if (isHiddenPassword == true) {
      isHiddenPassword = false;
    } else {
      isHiddenPassword = true;
    }
    setState(() {});
  }
}
