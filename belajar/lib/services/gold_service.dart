// Import package firebase_database untuk mengakses Firebase Realtime Database
import "package:firebase_database/firebase_database.dart";

// GoldService juga harus disesuaikan dengan nama file dan lokasi sebenarnya (cth: gold_service.dart)
class GoldService {
  final DatabaseReference _database = FirebaseDatabase.instance.ref(
    'harga_emas',
  );

  Stream<DatabaseEvent> getPriceList() {
    // onValue mengembalikan stream yang mendengarkan perubahan data
    return _database.onValue;
  }
}