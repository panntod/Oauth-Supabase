# OAuth Supabase 🌐

## Deskripsi

Dalam repo ini, mengimplementasikan OAuth atau autentikasi menggunakan layanan dari Supabase. Berisikan implementasi singkat dari code pembuatan loginpage, dan dashboard.

## Dependencies

- @supabase/auth-ui-react ✨
- @supabase/auth-ui-shared 🌐
- @supabase/supabase-js 📊
- Tailwind 🎨
- Vite 🛠️
- React ⚙️

## Set Up Supabase

### Langkah 1:

Pastikan sudah membuat layanan Supabase Project atau buat menggunakan link ini:

[Supabase](https://supabase.com/dashboard/new/).

### Langkah 2:

Pastikan sudah membuat layanan Oauth yang akan digunakan, disini saya menggunakan `discord`, Aktifkan layanan pada `Authentication` lalu pergi ke `Providers`, copy call back url untuk diberikan pada `discord`

### Langkah 3:

Pastikan sudah menyalakan `discord developer`, lalu anda dapat menuju ke [Discord Developer Panel](https://discord.com/developers/applications), Lalu buat aplikasi baru, setelah anda memberi nama pergilah ke `Oauth`, Copy `client id` dan buat ulang `client secret` lalu copy. Setelah itu paste url redirect nya berisikan url yang didapatkan dilangkah sebelum nya.

### Langkah 4:

Kembali pada `Supabase Providers` atau yang dilangkah 2, isi client id dan juga secret sesuai dengan yang didapatkan di langkah 4. Click Save.

### Atau

Anda bisa melihat tutorial selengkapnya di [Cooper Code](https://www.youtube.com/watch?v=H1V716XPUEs)

## Instalasi Project

Jalankan perintah:

```bash
git clone https://github.com/panntod/Oauth-Supabase.git
```

Setelah itu masuk ke direktori, dengan menjalankan:

```bash
cd Oauth-Supabase
```

Setelah itu instalasi dependensi, dengan menjalankan:

```bash
npm install
```

Setelah itu, ganti `.env.example` menjadi `.env`, dan isi dengan code yang kalian dapatkan dari `Supabase Project Api`

```env
VITE_API_URL=<Ganti Dengan Url Supabase>
VITE_API_KEY=<Ganti Dengan Anon Public Key>
```
