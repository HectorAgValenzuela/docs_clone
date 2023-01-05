import 'package:docs_clone_flutter/screens/login_screen.dart';
import 'package:flutter/material.dart';
import 'package:routemaster/routemaster.dart';

final loggedOutMap = RouteMap(routes: {
  '/': (route) => const MaterialPage(
        child: LoginScreen(),
      )
});
