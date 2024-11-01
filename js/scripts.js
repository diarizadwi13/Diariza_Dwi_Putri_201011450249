// File: assets/js/script.js

// Fungsi untuk menambahkan data karyawan
function addKaryawan(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mengambil data dari form
    const nama = document.getElementById('nama').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById('email').value;
    const no_hp = document.getElementById('no_hp').value;
    const alamat = document.getElementById('alamat').value;
    const password = document.getElementById('password').value;
    const jabatan = document.getElementById('jabatan').value;
    const divisi = document.getElementById('divisi').value;

    // Membuat objek data karyawan
    const karyawan = {
        nama,
        gender,
        email,
        no_hp,
        alamat,
        password,
        jabatan,
        divisi
    };

    // Ambil data karyawan yang sudah ada dari local storage
    const karyawanList = JSON.parse(localStorage.getItem('karyawanList')) || [];

    // Tambahkan karyawan baru ke dalam list
    karyawanList.push(karyawan);

    // Simpan kembali ke local storage
    localStorage.setItem('karyawanList', JSON.stringify(karyawanList));

    // Reset form setelah data ditambahkan
    document.getElementById('addKaryawanForm').reset();

    // Redirect kembali ke halaman daftar karyawan
    window.location.href = 'karyawan.html';
}

// Fungsi untuk menampilkan data karyawan di tabel
function displayKaryawan() {
    const karyawanList = JSON.parse(localStorage.getItem('karyawanList')) || [];
    const tableBody = document.getElementById('karyawanTableBody');

    karyawanList.forEach((karyawan, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${karyawan.nama}</td>
            <td>${karyawan.gender}</td>
            <td>${karyawan.email}</td>
            <td>${karyawan.no_hp}</td>
            <td>${karyawan.alamat}</td>
            <td>${karyawan.jabatan}</td>
            <td>${karyawan.divisi}</td>
            <td>
                <a href="#" class="btn btn-info btn-sm"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></a>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteKaryawan(${index})"><i class="fas fa-trash"></i></a>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

// Fungsi untuk menghapus data karyawan
function deleteKaryawan(index) {
    const karyawanList = JSON.parse(localStorage.getItem('karyawanList')) || [];
    karyawanList.splice(index, 1); // Hapus karyawan dari array
    localStorage.setItem('karyawanList', JSON.stringify(karyawanList)); // Simpan kembali ke local storage
    location.reload(); // Muat ulang halaman untuk menampilkan data terbaru
}

// Fungsi untuk menambahkan data jabatan
function addJabatan(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    const jabatanInput = document.getElementById('jabatanInput').value;

    const jabatanList = JSON.parse(localStorage.getItem('jabatanList')) || [];
    jabatanList.push(jabatanInput);
    localStorage.setItem('jabatanList', JSON.stringify(jabatanList));

    document.getElementById('addJabatanForm').reset();
    window.location.href = 'jabatan.html'; // Redirect ke halaman jabatan
}

// Fungsi untuk menampilkan data jabatan di tabel
function displayJabatan() {
    const jabatanList = JSON.parse(localStorage.getItem('jabatanList')) || [];
    const tableBody = document.getElementById('jabatanTableBody');

    jabatanList.forEach((jabatan, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${jabatan}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></a>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteJabatan(${index})"><i class="fas fa-trash"></i></a>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

// Fungsi untuk menghapus data jabatan
function deleteJabatan(index) {
    const jabatanList = JSON.parse(localStorage.getItem('jabatanList')) || [];
    jabatanList.splice(index, 1); // Hapus jabatan dari array
    localStorage.setItem('jabatanList', JSON.stringify(jabatanList)); // Simpan kembali ke local storage
    location.reload(); // Muat ulang halaman untuk menampilkan data terbaru
}

// Fungsi untuk menambahkan data divisi
function addDivisi(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    const divisiInput = document.getElementById('divisiInput').value;

    const divisiList = JSON.parse(localStorage.getItem('divisiList')) || [];
    divisiList.push(divisiInput);
    localStorage.setItem('divisiList', JSON.stringify(divisiList));

    document.getElementById('addDivisiForm').reset();
    window.location.href = 'divisi.html'; // Redirect ke halaman divisi
}

// Fungsi untuk menampilkan data divisi di tabel
function displayDivisi() {
    const divisiList = JSON.parse(localStorage.getItem('divisiList')) || [];
    const tableBody = document.getElementById('divisiTableBody');

    divisiList.forEach((divisi, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${divisi}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></a>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteDivisi(${index})"><i class="fas fa-trash"></i></a>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

// Fungsi untuk menghapus data divisi
function deleteDivisi(index) {
    const divisiList = JSON.parse(localStorage.getItem('divisiList')) || [];
    divisiList.splice(index, 1); // Hapus divisi dari array
    localStorage.setItem('divisiList', JSON.stringify(divisiList)); // Simpan kembali ke local storage
    location.reload(); // Muat ulang halaman untuk menampilkan data terbaru
}

// Event listener untuk memanggil fungsi display saat halaman dimuat
window.onload = function() {
    displayKaryawan();
    displayJabatan();
    displayDivisi();
};
