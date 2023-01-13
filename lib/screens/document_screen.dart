import 'package:docs_clone_flutter/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class DocumentScreen extends ConsumerStatefulWidget {
  final String id;

  const DocumentScreen({
    super.key,
    required this.id,
  });

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _DocumentScreenState();
}

class _DocumentScreenState extends ConsumerState<DocumentScreen> {
  TextEditingController titleContoller =
      TextEditingController(text: 'Untitled');

  @override
  void dispose() {
    super.dispose();
    titleContoller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: kWhiteColor,
        elevation: 0,
        actions: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: ElevatedButton.icon(
              onPressed: () {},
              icon: const Icon(
                Icons.lock,
                size: 16,
              ),
              label: const Text('Share'),
              style: ElevatedButton.styleFrom(
                backgroundColor: kBLueColor,
              ),
            ),
          ),
        ],
        title: Row(
          children: [
            Image.asset(
              'assets/images/docs-logo.png',
              height: 40,
            ),
            const SizedBox(
              width: 10,
            ),
            SizedBox(
              width: 150,
              child: TextField(
                controller: titleContoller,
                decoration: const InputDecoration(
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.only(left: 10),
                ),
              ),
            )
          ],
        ),
      ),
      body: Center(
        child: Text(widget.id),
      ),
    );
  }
}
