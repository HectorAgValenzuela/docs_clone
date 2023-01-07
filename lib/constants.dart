import 'package:flutter_dotenv/flutter_dotenv.dart';

final host = dotenv.get('IP', fallback: "");