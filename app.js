const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
    setup() {
        // State aplikasi
        const currentPage = ref('login');
        const isSidebarOpen = ref(false);
        const user = ref(null);
        const version = ref('v1.1.0-tailwind');
        const loginEmail = ref('ketua@gmail.com');
        const loginPassword = ref('admin123458');
        const isLoading = ref(false);

        // Data dummy anggota kelas
        const students = ref([
            { id: 1, name: 'ABU CHAMID ARROSYIDI', attendance: 'present', studentId: 'XI-A-001' },
            { id: 2, name: 'ADE ARIFIN ILHAM', attendance: 'present', studentId: 'XI-A-002' },
            { id: 3, name: 'AHMAD BAHTIANUR', attendance: 'present', studentId: 'XI-A-003' },
            { id: 4, name: 'AHMAD MUNAWAR', attendance: 'late', studentId: 'XI-A-004' },
            { id: 5, name: 'AIDA HIKMATUN NUFUS', attendance: 'present', studentId: 'XI-A-005' },
            { id: 6, name: 'AISYAH ARIFIN', attendance: 'permit', studentId: 'XI-A-006' },
            { id: 7, name: 'ANNISA NUR AZIZAH', attendance: 'present', studentId: 'XI-A-007' },
            { id: 8, name: 'ARYA DHARMA NUGRAHA', attendance: 'absent', studentId: 'XI-A-008' },
            { id: 9, name: 'AUFA AMIRA', attendance: 'present', studentId: 'XI-A-009' },
            { id: 10, name: 'CLARA NAIFA ALMIRA', attendance: 'present', studentId: 'XI-A-010' },
            { id: 11, name: 'FADHIL MUBAROK', attendance: 'present', studentId: 'XI-A-011' },
            { id: 12, name: 'FARAH AFIFAH', attendance: 'present', studentId: 'XI-A-012' },
            { id: 13, name: 'FATIMAH', attendance: 'present', studentId: 'XI-A-013' },
            { id: 14, name: 'FEBRIANDA EISYA HUWAIDA', attendance: 'present', studentId: 'XI-A-014' },
            { id: 15, name: 'GHINA HASANAH', attendance: 'present', studentId: 'XI-A-015' },
            { id: 16, name: 'GRACILLA AULIA AZ ZAHRA', attendance: 'late', studentId: 'XI-A-016' },
            { id: 17, name: 'HABIBAH', attendance: 'present', studentId: 'XI-A-017' },
            { id: 18, name: 'LINTANG CAYLA RAMADAYANTI', attendance: 'present', studentId: 'XI-A-018' },
            { id: 19, name: 'M. DENDY MARGASARI', attendance: 'permit', studentId: 'XI-A-019' },
            { id: 20, name: 'M. NAZRIEL ILMI', attendance: 'present', studentId: 'XI-A-020' },
            { id: 21, name: 'M. RADHITYA RAHMAN', attendance: 'present', studentId: 'XI-A-021' },
            { id: 22, name: 'MUHAMMAD AUFA ABQARY', attendance: 'present', studentId: 'XI-A-022' },
            { id: 23, name: 'MUHAMMAD GHULWANI LATIF', attendance: 'present', studentId: 'XI-A-023' },
            { id: 24, name: 'MUHAMMAD IZZATUL AZHAR', attendance: 'absent', studentId: 'XI-A-024' },
            { id: 25, name: 'MUHAMMAD RIDHANI AKMAL', attendance: 'present', studentId: 'XI-A-025' },
            { id: 26, name: 'MUHAMMAD ZAINUDIN RASYID', attendance: 'present', studentId: 'XI-A-026' },
            { id: 27, name: 'NADA NABILA', attendance: 'present', studentId: 'XI-A-027' },
            { id: 28, name: 'NADIA', attendance: 'present', studentId: 'XI-A-028' },
            { id: 29, name: 'RAIHANI MAULIDA', attendance: 'present', studentId: 'XI-A-029' },
            { id: 30, name: 'RAUDHATUN ASFHIA ADHA', attendance: 'present', studentId: 'XI-A-030' },
            { id: 31, name: 'SHAVIRA PUTRI', attendance: 'present', studentId: 'XI-A-031' },
            { id: 32, name: 'SITI NOOR LATIFAH', attendance: 'present', studentId: 'XI-A-032' },
            { id: 33, name: 'SOFIA HAYATI', attendance: 'present', studentId: 'XI-A-033' },
            { id: 34, name: 'ZAHWA ASFA AFKARINA', attendance: 'present', studentId: 'XI-A-034' }
        ]);

        // Data keuangan
        const finances = ref({
            balance: 1250000,
            transactions: [
                { id: 1, type: 'income', amount: 500000, description: 'Iuran bulanan Maret', date: '2024-03-01', user: 'Bendahara' },
                { id: 2, type: 'expense', amount: 150000, description: 'Beli alat kebersihan', date: '2024-03-05', user: 'Bendahara' },
                { id: 3, type: 'expense', amount: 75000, description: 'Konsumsi rapat', date: '2024-03-10', user: 'Bendahara' },
                { id: 4, type: 'income', amount: 200000, description: 'Sumbangan orang tua', date: '2024-03-15', user: 'Bendahara' },
                { id: 5, type: 'expense', amount: 50000, description: 'Print materi ujian', date: '2024-03-18', user: 'Bendahara' }
            ]
        });

        // Data tugas & kegiatan
        const tasks = ref([
            { id: 1, title: 'Mengerjakan soal Matematika halaman 45-50', deadline: '2024-03-25', subject: 'Matematika', status: 'pending', priority: 'high' },
            { id: 2, title: 'Presentasi sejarah Indonesia kemerdekaan', deadline: '2024-03-22', subject: 'Sejarah', status: 'completed', priority: 'medium' },
            { id: 3, title: 'Laporan praktikum Fisika - Hukum Ohm', deadline: '2024-03-28', subject: 'Fisika', status: 'pending', priority: 'high' },
            { id: 4, title: 'Membaca novel "Laskar Pelangi" bab 1-5', deadline: '2024-04-05', subject: 'Bahasa Indonesia', status: 'in-progress', priority: 'low' },
            { id: 5, title: 'Project kelompok Biologi - Ekosistem', deadline: '2024-04-10', subject: 'Biologi', status: 'pending', priority: 'medium' }
        ]);

        // Data kebersihan
        const cleanliness = ref([
            { id: 1, area: 'Depan kelas', responsible: 'Ahmad Bahtianur', day: 'Senin', status: 'clean', time: '07.00-07.15' },
            { id: 2, area: 'Belakang kelas', responsible: 'M. Nazriel Ilmi', day: 'Selasa', status: 'clean', time: '07.00-07.15' },
            { id: 3, area: 'Ruang guru', responsible: 'Ade Arifin Ilham', day: 'Rabu', status: 'dirty', time: '07.15-07.30' },
            { id: 4, area: 'Perpustakaan kelas', responsible: 'Aisyah Arifin', day: 'Kamis', status: 'clean', time: '07.00-07.15' },
            { id: 5, area: 'Lorong', responsible: 'Muhammad Ridhani Akmal', day: 'Jumat', status: 'clean', time: '07.15-07.30' }
        ]);

        // Data kelas
        const classInfo = ref({
            name: 'XI-A',
            school: 'MAN 2 Kota Banjarmasin',
            homeroomTeacher: 'Bapak/Ibu Guru Wali Kelas',
            totalStudents: 34,
            classSchedule: 'Senin-Jumat, 07.00-14.00'
        });

        // Form data untuk input baru
        const newTransaction = ref({
            type: 'income',
            amount: '',
            description: ''
        });

        const newTask = ref({
            title: '',
            deadline: '',
            subject: '',
            priority: 'medium'
        });

        const newCleanliness = ref({
            area: '',
            responsible: '',
            day: 'Senin',
            time: '07.00-07.15'
        });

        // Data presensi hari ini
        const attendanceSummary = computed(() => {
            const summary = {
                present: students.value.filter(s => s.attendance === 'present').length,
                absent: students.value.filter(s => s.attendance === 'absent').length,
                late: students.value.filter(s => s.attendance === 'late').length,
                permit: students.value.filter(s => s.attendance === 'permit').length,
                total: students.value.length
            };
            return summary;
        });

        // Ringkasan keuangan
        const financeSummary = computed(() => {
            const income = finances.value.transactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);

            const expense = finances.value.transactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);

            return { income, expense };
        });

        // Ringkasan tugas
        const taskSummary = computed(() => {
            const pending = tasks.value.filter(t => t.status === 'pending').length;
            const completed = tasks.value.filter(t => t.status === 'completed').length;
            const inProgress = tasks.value.filter(t => t.status === 'in-progress').length;

            return { pending, completed, inProgress };
        });

        // Ringkasan kebersihan
        const cleanlinessSummary = computed(() => {
            const clean = cleanliness.value.filter(c => c.status === 'clean').length;
            const dirty = cleanliness.value.filter(c => c.status === 'dirty').length;

            return { clean, dirty };
        });

        // Fungsi login
        const login = (email, password) => {
            if (isLoading.value) return false;

            isLoading.value = true;

            // Simulasi loading
            setTimeout(() => {
                // Dummy login berdasarkan email
                if (password === 'admin123458') {
                    let role = 'student';
                    let name = 'Pengguna';

                    if (email.includes('ketua')) {
                        role = 'ketua';
                        name = 'Ketua Kelas';
                    } else if (email.includes('bendahara')) {
                        role = 'bendahara';
                        name = 'Bendahara';
                    } else if (email.includes('sekretaris')) {
                        role = 'sekretaris';
                        name = 'Sekretaris';
                    } else if (email.includes('kebersihan')) {
                        role = 'kebersihan';
                        name = 'Staff Kebersihan';
                    }

                    user.value = {
                        email,
                        role,
                        name,
                        avatar: getAvatarInitials(name)
                    };

                    currentPage.value = 'dashboard';
                    isSidebarOpen.value = true;
                } else {
                    alert('Login gagal. Password salah!');
                }

                isLoading.value = false;
            }, 800);

            return true;
        };

        // Fungsi logout
        const logout = () => {
            user.value = null;
            currentPage.value = 'login';
            isSidebarOpen.value = false;
        };

        // Format angka ke Rupiah
        const formatRupiah = (amount) => {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(amount);
        };

        // Format tanggal
        const formatDate = (dateString) => {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        };

        // Format tanggal pendek
        const formatShortDate = (dateString) => {
            const options = { day: 'numeric', month: 'short' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        };

        // Cek apakah user dapat mengakses halaman tertentu
        const canAccess = (page) => {
            if (!user.value) return false;

            const role = user.value.role;

            // Ketua bisa akses semua
            if (role === 'ketua') return true;

            // Aturan akses per halaman
            const accessRules = {
                dashboard: ['ketua', 'bendahara', 'sekretaris', 'kebersihan', 'student'],
                bendahara: ['ketua', 'bendahara'],
                sekretaris: ['ketua', 'sekretaris'],
                kebersihan: ['ketua', 'kebersihan']
            };

            return accessRules[page]?.includes(role) || false;
        };

        // Ambil inisial untuk avatar
        const getAvatarInitials = (name) => {
            return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        };

        // Tambah transaksi keuangan
        const addTransaction = () => {
            if (!newTransaction.value.amount || !newTransaction.value.description) {
                alert('Mohon isi jumlah dan deskripsi');
                return;
            }

            const amount = parseInt(newTransaction.value.amount);
            if (isNaN(amount) || amount <= 0) {
                alert('Jumlah harus angka positif');
                return;
            }

            const transaction = {
                id: finances.value.transactions.length + 1,
                type: newTransaction.value.type,
                amount: amount,
                description: newTransaction.value.description,
                date: new Date().toISOString().split('T')[0],
                user: user.value.name
            };

            finances.value.transactions.unshift(transaction);

            // Update saldo
            if (transaction.type === 'income') {
                finances.value.balance += amount;
            } else {
                finances.value.balance -= amount;
            }

            // Reset form
            newTransaction.value = {
                type: 'income',
                amount: '',
                description: ''
            };

            // Tampilkan notifikasi sukses
            showNotification('Transaksi berhasil ditambahkan!', 'success');
        };

        // Tambah tugas baru
        const addTask = () => {
            if (!newTask.value.title || !newTask.value.deadline || !newTask.value.subject) {
                alert('Mohon isi semua field');
                return;
            }

            const task = {
                id: tasks.value.length + 1,
                title: newTask.value.title,
                deadline: newTask.value.deadline,
                subject: newTask.value.subject,
                priority: newTask.value.priority,
                status: 'pending'
            };

            tasks.value.unshift(task);

            // Reset form
            newTask.value = {
                title: '',
                deadline: '',
                subject: '',
                priority: 'medium'
            };

            showNotification('Tugas berhasil ditambahkan!', 'success');
        };

        // Tambah jadwal kebersihan
        const addCleanliness = () => {
            if (!newCleanliness.value.area || !newCleanliness.value.responsible) {
                alert('Mohon isi area dan penanggung jawab');
                return;
            }

            const clean = {
                id: cleanliness.value.length + 1,
                area: newCleanliness.value.area,
                responsible: newCleanliness.value.responsible,
                day: newCleanliness.value.day,
                time: newCleanliness.value.time,
                status: 'clean'
            };

            cleanliness.value.unshift(clean);

            // Reset form
            newCleanliness.value = {
                area: '',
                responsible: '',
                day: 'Senin',
                time: '07.00-07.15'
            };

            showNotification('Jadwal kebersihan berhasil ditambahkan!', 'success');
        };

        // Toggle status kehadiran siswa
        const toggleAttendance = (studentId) => {
            const student = students.value.find(s => s.id === studentId);
            if (!student) return;

            const statusOrder = ['present', 'late', 'permit', 'absent'];
            const currentIndex = statusOrder.indexOf(student.attendance);
            const nextIndex = (currentIndex + 1) % statusOrder.length;
            student.attendance = statusOrder[nextIndex];

            showNotification(`Status kehadiran ${student.name} diubah menjadi ${student.attendance}`, 'info');
        };

        // Toggle status kebersihan
        const toggleCleanlinessStatus = (id) => {
            const item = cleanliness.value.find(c => c.id === id);
            if (item) {
                item.status = item.status === 'clean' ? 'dirty' : 'clean';
                const statusText = item.status === 'clean' ? 'Bersih' : 'Kotor';
                showNotification(`Status area ${item.area} diubah menjadi ${statusText}`, 'info');
            }
        };

        // Toggle status tugas
        const toggleTaskStatus = (id) => {
            const task = tasks.value.find(t => t.id === id);
            if (!task) return;

            const statusOrder = ['pending', 'in-progress', 'completed'];
            const currentIndex = statusOrder.indexOf(task.status);
            const nextIndex = (currentIndex + 1) % statusOrder.length;
            task.status = statusOrder[nextIndex];

            showNotification(`Status tugas "${task.title}" diubah`, 'info');
        };

        // Toggle sidebar pada mobile
        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value;
        };

        // Navigasi ke halaman
        const navigateTo = (page) => {
            if (canAccess(page)) {
                currentPage.value = page;
                // Pada mobile, tutup sidebar setelah navigasi
                if (window.innerWidth < 768) {
                    isSidebarOpen.value = false;
                }
            } else {
                showNotification('Anda tidak memiliki akses ke halaman ini', 'error');
            }
        };

        // Tampilkan notifikasi
        const showNotification = (message, type = 'info') => {
            // Untuk demo, kita pakai alert saja
            alert(message);
        };

        // Get attendance color
        const getAttendanceColor = (status) => {
            const colors = {
                present: 'bg-green-500',
                absent: 'bg-red-500',
                late: 'bg-yellow-500',
                permit: 'bg-blue-500'
            };
            return colors[status] || 'bg-gray-500';
        };

        // Get attendance text
        const getAttendanceText = (status) => {
            const texts = {
                present: 'Hadir',
                absent: 'Absen',
                late: 'Terlambat',
                permit: 'Izin'
            };
            return texts[status] || 'Tidak diketahui';
        };

        // Get task priority color
        const getPriorityColor = (priority) => {
            const colors = {
                high: 'bg-red-100 text-red-800',
                medium: 'bg-yellow-100 text-yellow-800',
                low: 'bg-green-100 text-green-800'
            };
            return colors[priority] || 'bg-gray-100 text-gray-800';
        };

        // Get task priority text
        const getPriorityText = (priority) => {
            const texts = {
                high: 'Tinggi',
                medium: 'Sedang',
                low: 'Rendah'
            };
            return texts[priority] || 'Tidak diketahui';
        };

        // Get status color
        const getStatusColor = (status) => {
            const colors = {
                pending: 'bg-yellow-100 text-yellow-800',
                'in-progress': 'bg-blue-100 text-blue-800',
                completed: 'bg-green-100 text-green-800',
                clean: 'bg-green-100 text-green-800',
                dirty: 'bg-red-100 text-red-800'
            };
            return colors[status] || 'bg-gray-100 text-gray-800';
        };

        // Get status text
        const getStatusText = (status) => {
            const texts = {
                pending: 'Pending',
                'in-progress': 'Dalam Proses',
                completed: 'Selesai',
                clean: 'Bersih',
                dirty: 'Kotor'
            };
            return texts[status] || 'Tidak diketahui';
        };

        // Inisialisasi data dummy pada mount
        onMounted(() => {
            console.log('Aplikasi Manajemen Kelas XI-A (Tailwind) dimuat');

            // Cek jika ada data di localStorage
            const savedUser = localStorage.getItem('class_management_user');
            if (savedUser) {
                try {
                    user.value = JSON.parse(savedUser);
                    currentPage.value = 'dashboard';
                    isSidebarOpen.value = true;
                } catch (e) {
                    console.error('Error loading user data:', e);
                }
            }
        });

        // Simpan user ke localStorage saat berubah
        watch(user, (newUser) => {
            if (newUser) {
                localStorage.setItem('class_management_user', JSON.stringify(newUser));
            } else {
                localStorage.removeItem('class_management_user');
            }
        }, { deep: true });

        // Return semua variabel dan fungsi yang dibutuhkan template
        return {
            currentPage,
            isSidebarOpen,
            user,
            version,
            students,
            finances,
            tasks,
            cleanliness,
            classInfo,
            attendanceSummary,
            financeSummary,
            taskSummary,
            cleanlinessSummary,
            newTransaction,
            newTask,
            newCleanliness,
            loginEmail,
            loginPassword,
            isLoading,
            login,
            logout,
            formatRupiah,
            formatDate,
            formatShortDate,
            canAccess,
            addTransaction,
            addTask,
            addCleanliness,
            toggleAttendance,
            toggleCleanlinessStatus,
            toggleTaskStatus,
            toggleSidebar,
            navigateTo,
            getAvatarInitials,
            getAttendanceColor,
            getAttendanceText,
            getPriorityColor,
            getPriorityText,
            getStatusColor,
            getStatusText
        };
    },

    template: `
    <div class="min-h-screen bg-gray-50">
        <!-- Login Page -->
        <div v-if="currentPage === 'login'" class="min-h-screen gradient-bg flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div class="bg-gradient-to-r from-blue-800 to-purple-800 p-8 text-white">
                    <div class="flex items-center justify-center mb-4">
                        <div class="bg-white/20 p-3 rounded-full mr-3">
                            <i class="fas fa-book text-2xl"></i>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold">Manajemen Kelas</h1>
                            <p class="text-blue-100">XI-A - MAN 2 Banjarmasin</p>
                        </div>
                    </div>
                    <p class="text-center text-blue-100 text-sm">Sistem manajemen kelas terintegrasi</p>
                </div>

                <div class="p-8">
                    <form @submit.prevent="login(loginEmail, loginPassword)" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input
                                    type="email"
                                    class="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    v-model="loginEmail"
                                    placeholder="nama-role@gmail.com"
                                    required
                                >
                            </div>
                            <p class="mt-1 text-xs text-gray-500">Contoh: ketua@gmail.com, bendahara@gmail.com</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type="password"
                                    class="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    v-model="loginPassword"
                                    value="admin123458"
                                    required
                                >
                            </div>
                            <p class="mt-1 text-xs text-gray-500">Password: admin123458</p>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                            :disabled="isLoading"
                        >
                            <span v-if="isLoading">
                                <i class="fas fa-spinner fa-spin mr-2"></i> Memproses...
                            </span>
                            <span v-else>
                                <i class="fas fa-sign-in-alt mr-2"></i> Masuk ke Sistem
                            </span>
                        </button>

                        <div class="mt-6 pt-6 border-t border-gray-200">
                            <h4 class="text-sm font-medium text-gray-700 mb-2">Petunjuk Login (Dummy):</h4>
                            <ul class="text-xs text-gray-600 space-y-1">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-0.5 mr-2"></i>
                                    <span>Email: [role]@gmail.com (contoh: ketua@gmail.com)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-0.5 mr-2"></i>
                                    <span>Password: admin123458</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-green-500 mt-0.5 mr-2"></i>
                                    <span>Role berbeda akan mengakses fitur berbeda</span>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Main App (Setelah Login) -->
        <div v-else class="min-h-screen flex flex-col">
            <!-- Header -->
            <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
                <div class="container mx-auto px-4 py-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <!-- Mobile sidebar toggle -->
                            <button
                                @click="toggleSidebar"
                                class="lg:hidden p-2 rounded-md hover:bg-gray-700 transition"
                            >
                                <i class="fas fa-bars text-xl"></i>
                            </button>

                            <div class="flex items-center">
                                <div class="bg-blue-500 p-2 rounded-lg mr-3">
                                    <i class="fas fa-book text-xl"></i>
                                </div>
                                <div>
                                    <h1 class="text-xl font-bold">Manajemen Kelas XI-A</h1>
                                    <p class="text-gray-300 text-sm">MAN 2 Kota Banjarmasin</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="hidden md:block text-right">
                                <p class="font-medium">{{ user.name }}</p>
                                <span class="text-xs bg-blue-500 px-2 py-1 rounded-full">{{ user.role.toUpperCase() }}</span>
                            </div>

                            <div class="relative group">
                                <button class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition">
                                    <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                                        {{ user.avatar }}
                                    </div>
                                    <i class="fas fa-chevron-down text-sm"></i>
                                </button>

                                <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50 hidden group-hover:block">
                                    <div class="px-4 py-3 border-b">
                                        <p class="font-medium text-gray-900">{{ user.name }}</p>
                                        <p class="text-sm text-gray-500">{{ user.email }}</p>
                                    </div>
                                    <button
                                        @click="logout"
                                        class="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center"
                                    >
                                        <i class="fas fa-sign-out-alt mr-2"></i> Keluar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="flex flex-1 overflow-hidden">
                <!-- Sidebar -->
                <aside
                    class="sidebar-gradient text-white h-full w-64 fixed lg:relative lg:translate-x-0 z-40 transition-transform duration-300 ease-in-out"
                    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
                    style="height: calc(100vh - 70px);"
                >
                    <div class="p-6 border-b border-gray-700">
                        <div class="text-center">
                            <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                                {{ classInfo.name }}
                            </div>
                            <h3 class="font-bold text-lg">Kelas {{ classInfo.name }}</h3>
                            <p class="text-gray-300 text-sm mt-1">{{ classInfo.school }}</p>
                            <div class="mt-3">
                                <span class="inline-block bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                                    {{ user.role.toUpperCase() }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <nav class="py-4">
                        <ul class="space-y-1 px-3">
                            <li>
                                <button
                                    @click="navigateTo('dashboard')"
                                    class="w-full text-left flex items-center px-4 py-3 rounded-lg transition"
                                    :class="currentPage === 'dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-700 text-gray-300'"
                                >
                                    <i class="fas fa-tachometer-alt w-6 mr-3 text-center"></i>
                                    <span>Dashboard</span>
                                </button>
                            </li>

                            <li v-if="canAccess('bendahara')">
                                <button
                                    @click="navigateTo('bendahara')"
                                    class="w-full text-left flex items-center px-4 py-3 rounded-lg transition"
                                    :class="currentPage === 'bendahara' ? 'bg-green-500 text-white' : 'hover:bg-gray-700 text-gray-300'"
                                >
                                    <i class="fas fa-wallet w-6 mr-3 text-center"></i>
                                    <span>Bendahara</span>
                                    <span class="ml-auto text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                                        {{ formatRupiah(finances.balance) }}
                                    </span>
                                </button>
                            </li>

                            <li v-if="canAccess('sekretaris')">
                                <button
                                    @click="navigateTo('sekretaris')"
                                    class="w-full text-left flex items-center px-4 py-3 rounded-lg transition"
                                    :class="currentPage === 'sekretaris' ? 'bg-purple-500 text-white' : 'hover:bg-gray-700 text-gray-300'"
                                >
                                    <i class="fas fa-clipboard-list w-6 mr-3 text-center"></i>
                                    <span>Sekretaris</span>
                                    <span class="ml-auto text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                                        {{ taskSummary.pending }} tugas
                                    </span>
                                </button>
                            </li>

                            <li v-if="canAccess('kebersihan')">
                                <button
                                    @click="navigateTo('kebersihan')"
                                    class="w-full text-left flex items-center px-4 py-3 rounded-lg transition"
                                    :class="currentPage === 'kebersihan' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-700 text-gray-300'"
                                >
                                    <i class="fas fa-broom w-6 mr-3 text-center"></i>
                                    <span>Kebersihan</span>
                                    <span class="ml-auto text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                                        {{ cleanlinessSummary.clean }}/{{ cleanliness.length }} bersih
                                    </span>
                                </button>
                            </li>

                            <li class="pt-6 border-t border-gray-700 mt-4">
                                <div class="px-4 py-2">
                                    <p class="text-xs text-gray-400 uppercase tracking-wider mb-2">Informasi Kelas</p>
                                    <div class="space-y-2">
                                        <div class="flex items-center text-sm">
                                            <i class="fas fa-users text-gray-400 w-5 mr-2"></i>
                                            <span>{{ classInfo.totalStudents }} Siswa</span>
                                        </div>
                                        <div class="flex items-center text-sm">
                                            <i class="fas fa-clock text-gray-400 w-5 mr-2"></i>
                                            <span>{{ classInfo.classSchedule }}</span>
                                        </div>
                                        <div class="flex items-center text-sm">
                                            <i class="fas fa-chalkboard-teacher text-gray-400 w-5 mr-2"></i>
                                            <span>{{ classInfo.homeroomTeacher }}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <!-- Mobile overlay -->
                    <div
                        v-if="isSidebarOpen"
                        class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                        @click="toggleSidebar"
                        style="margin-top: 70px;"
                    ></div>
                </aside>

                <!-- Main Content -->
                <main class="flex-1 overflow-auto p-4 lg:p-6" style="height: calc(100vh - 70px);">
                    <!-- Dashboard -->
                    <div v-if="currentPage === 'dashboard'">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800">Dashboard Kelas XI-A</h1>
                                <p class="text-gray-600">Selamat datang, {{ user.name }}. Ini adalah ringkasan aktivitas kelas.</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">
                                    <i class="fas fa-calendar-day mr-2"></i>
                                    {{ new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }}
                                </span>
                            </div>
                        </div>

                        <!-- Stats Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <!-- Kehadiran -->
                            <div class="bg-white rounded-xl shadow-md p-6 card-hover">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="p-3 rounded-lg bg-blue-100 text-blue-600">
                                        <i class="fas fa-user-check text-xl"></i>
                                    </div>
                                    <span class="text-sm font-medium text-gray-500">Kehadiran Hari Ini</span>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Hadir</span>
                                        <span class="font-bold text-green-600">{{ attendanceSummary.present }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Terlambat</span>
                                        <span class="font-bold text-yellow-600">{{ attendanceSummary.late }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Izin</span>
                                        <span class="font-bold text-blue-600">{{ attendanceSummary.permit }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Absen</span>
                                        <span class="font-bold text-red-600">{{ attendanceSummary.absent }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Keuangan -->
                            <div class="bg-white rounded-xl shadow-md p-6 card-hover">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="p-3 rounded-lg bg-green-100 text-green-600">
                                        <i class="fas fa-wallet text-xl"></i>
                                    </div>
                                    <span class="text-sm font-medium text-gray-500">Keuangan Kelas</span>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-800 mb-2 rupiah">{{ formatRupiah(finances.balance) }}</h3>
                                <p class="text-gray-600 text-sm mb-4">Saldo kas saat ini</p>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Pemasukan</span>
                                        <span class="font-medium text-green-600">+ {{ formatRupiah(financeSummary.income) }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Pengeluaran</span>
                                        <span class="font-medium text-red-600">- {{ formatRupiah(financeSummary.expense) }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Tugas -->
                            <div class="bg-white rounded-xl shadow-md p-6 card-hover">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="p-3 rounded-lg bg-purple-100 text-purple-600">
                                        <i class="fas fa-tasks text-xl"></i>
                                    </div>
                                    <span class="text-sm font-medium text-gray-500">Tugas & Kegiatan</span>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Pending</span>
                                        <span class="font-bold text-yellow-600">{{ taskSummary.pending }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Dalam Proses</span>
                                        <span class="font-bold text-blue-600">{{ taskSummary.inProgress }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Selesai</span>
                                        <span class="font-bold text-green-600">{{ taskSummary.completed }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Kebersihan -->
                            <div class="bg-white rounded-xl shadow-md p-6 card-hover">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="p-3 rounded-lg bg-yellow-100 text-yellow-600">
                                        <i class="fas fa-broom text-xl"></i>
                                    </div>
                                    <span class="text-sm font-medium text-gray-500">Kebersihan</span>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Area Bersih</span>
                                        <span class="font-bold text-green-600">{{ cleanlinessSummary.clean }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Area Kotor</span>
                                        <span class="font-bold text-red-600">{{ cleanlinessSummary.dirty }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-600">Total Area</span>
                                        <span class="font-bold text-gray-800">{{ cleanliness.length }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Data Siswa & Tugas Terbaru -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <!-- Daftar Siswa (Ringkas) -->
                            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                                    <h2 class="text-xl font-bold text-white flex items-center">
                                        <i class="fas fa-users mr-3"></i> Daftar Siswa XI-A
                                    </h2>
                                </div>
                                <div class="p-4">
                                    <div class="overflow-x-auto">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                <tr v-for="(student, index) in students.slice(0, 8)" :key="student.id">
                                                    <td class="px-4 py-3 text-sm text-gray-800">{{ index + 1 }}</td>
                                                    <td class="px-4 py-3 text-sm text-gray-800">{{ student.name }}</td>
                                                    <td class="px-4 py-3">
                                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" :class="getStatusColor(student.attendance)">
                                                            <span :class="getAttendanceColor(student.attendance)" class="attendance-dot"></span>
                                                            {{ getAttendanceText(student.attendance) }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <button
                                            @click="navigateTo('sekretaris')"
                                            class="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center mx-auto"
                                        >
                                            Lihat semua {{ students.length }} siswa
                                            <i class="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Tugas Mendesak -->
                            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                                    <h2 class="text-xl font-bold text-white flex items-center">
                                        <i class="fas fa-tasks mr-3"></i> Tugas Mendesak
                                    </h2>
                                </div>
                                <div class="p-4">
                                    <div class="space-y-4">
                                        <div v-for="task in tasks.filter(t => t.priority === 'high').slice(0, 3)" :key="task.id" class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                                            <div class="flex items-start justify-between">
                                                <div>
                                                    <h4 class="font-medium text-gray-800">{{ task.title }}</h4>
                                                    <div class="flex items-center mt-2 space-x-4">
                                                        <span class="text-sm text-gray-600 flex items-center">
                                                            <i class="fas fa-book mr-1"></i> {{ task.subject }}
                                                        </span>
                                                        <span class="text-sm text-gray-600 flex items-center">
                                                            <i class="fas fa-calendar mr-1"></i> {{ formatShortDate(task.deadline) }}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col items-end space-y-2">
                                                    <span class="text-xs px-2 py-1 rounded-full" :class="getPriorityColor(task.priority)">
                                                        {{ getPriorityText(task.priority) }}
                                                    </span>
                                                    <span class="text-xs px-2 py-1 rounded-full" :class="getStatusColor(task.status)">
                                                        {{ getStatusText(task.status) }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <button
                                            @click="navigateTo('sekretaris')"
                                            class="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center"
                                        >
                                            <i class="fas fa-clipboard-list mr-2"></i> Kelola Semua Tugas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Actions -->
                        <div class="bg-white rounded-xl shadow-md p-6">
                            <h2 class="text-lg font-bold text-gray-800 mb-4">Aksi Cepat</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button
                                    v-if="canAccess('bendahara')"
                                    @click="navigateTo('bendahara')"
                                    class="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition text-left"
                                >
                                    <div class="flex items-center">
                                        <div class="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-medium text-gray-800">Tambah Transaksi</h4>
                                            <p class="text-sm text-gray-600">Pemasukan/pengeluaran kas</p>
                                        </div>
                                    </div>
                                </button>

                                <button
                                    v-if="canAccess('sekretaris')"
                                    @click="navigateTo('sekretaris')"
                                    class="p-4 rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition text-left"
                                >
                                    <div class="flex items-center">
                                        <div class="p-2 rounded-lg bg-purple-100 text-purple-600 mr-3">
                                            <i class="fas fa-edit"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-medium text-gray-800">Catat Presensi</h4>
                                            <p class="text-sm text-gray-600">Update kehadiran siswa</p>
                                        </div>
                                    </div>
                                </button>

                                <button
                                    v-if="canAccess('kebersihan')"
                                    @click="navigateTo('kebersihan')"
                                    class="p-4 rounded-lg border border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition text-left"
                                >
                                    <div class="flex items-center">
                                        <div class="p-2 rounded-lg bg-yellow-100 text-yellow-600 mr-3">
                                            <i class="fas fa-broom"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-medium text-gray-800">Update Kebersihan</h4>
                                            <p class="text-sm text-gray-600">Cek status kebersihan area</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Bendahara Page -->
                    <div v-else-if="currentPage === 'bendahara' && canAccess('bendahara')">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                                    <i class="fas fa-wallet mr-3 text-green-600"></i> Bendahara Kelas
                                </h1>
                                <p class="text-gray-600">Kelola keuangan dan kas kelas XI-A</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow">
                                    <p class="text-sm">Saldo Kas</p>
                                    <p class="text-2xl font-bold rupiah">{{ formatRupiah(finances.balance) }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Form Transaksi Baru -->
                        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                            <h2 class="text-lg font-bold text-gray-800 mb-4">Tambah Transaksi Baru</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Jenis Transaksi</label>
                                    <div class="flex space-x-2">
                                        <button
                                            @click="newTransaction.type = 'income'"
                                            class="flex-1 py-2 px-4 rounded-lg border transition"
                                            :class="newTransaction.type === 'income' ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300 hover:bg-gray-50'"
                                        >
                                            <i class="fas fa-plus mr-2"></i> Pemasukan
                                        </button>
                                        <button
                                            @click="newTransaction.type = 'expense'"
                                            class="flex-1 py-2 px-4 rounded-lg border transition"
                                            :class="newTransaction.type === 'expense' ? 'bg-red-100 border-red-500 text-red-700' : 'border-gray-300 hover:bg-gray-50'"
                                        >
                                            <i class="fas fa-minus mr-2"></i> Pengeluaran
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah (Rp)</label>
                                    <input
                                        type="number"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                        v-model="newTransaction.amount"
                                        placeholder="Contoh: 50000"
                                    >
                                </div>

                                <div class="md:col-span-2">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Keterangan</label>
                                    <input
                                        type="text"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                        v-model="newTransaction.description"
                                        placeholder="Contoh: Iuran bulanan Maret"
                                    >
                                </div>
                            </div>
                            <button
                                @click="addTransaction"
                                class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center"
                            >
                                <i class="fas fa-save mr-2"></i> Simpan Transaksi
                            </button>
                        </div>

                        <!-- Riwayat Transaksi -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                            <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                                <h2 class="text-xl font-bold text-white flex items-center">
                                    <i class="fas fa-history mr-3"></i> Riwayat Transaksi
                                </h2>
                            </div>
                            <div class="p-0">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oleh</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="transaction in finances.transactions" :key="transaction.id" class="hover:bg-gray-50 transition">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ transaction.date }}</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                                                          :class="transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                                                        <i :class="transaction.type === 'income' ? 'fas fa-arrow-down mr-1' : 'fas fa-arrow-up mr-1'"></i>
                                                        {{ transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran' }}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 text-sm text-gray-800">{{ transaction.description }}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                                    :class="transaction.type === 'income' ? 'text-green-600' : 'text-red-600'">
                                                    {{ transaction.type === 'income' ? '+' : '-' }} {{ formatRupiah(transaction.amount) }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ transaction.user }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sekretaris Page -->
                    <div v-else-if="currentPage === 'sekretaris' && canAccess('sekretaris')">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                                    <i class="fas fa-clipboard-list mr-3 text-purple-600"></i> Sekretaris Kelas
                                </h1>
                                <p class="text-gray-600">Kelola tugas, presensi, dan kegiatan kelas XI-A</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <div class="flex space-x-2">
                                    <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
                                        <p class="text-sm">Total Tugas</p>
                                        <p class="text-xl font-bold">{{ tasks.length }}</p>
                                    </div>
                                    <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                                        <p class="text-sm">Siswa Hadir</p>
                                        <p class="text-xl font-bold">{{ attendanceSummary.present }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tabs -->
                        <div class="mb-6">
                            <div class="border-b border-gray-200">
                                <nav class="flex space-x-8">
                                    <button
                                        @click="activeTab = 'tasks'"
                                        :class="activeTab === 'tasks' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'"
                                        class="py-3 px-1 font-medium text-sm border-b-2 border-transparent transition"
                                    >
                                        <i class="fas fa-tasks mr-2"></i> Tugas & Kegiatan
                                    </button>
                                    <button
                                        @click="activeTab = 'attendance'"
                                        :class="activeTab === 'attendance' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'"
                                        class="py-3 px-1 font-medium text-sm border-b-2 border-transparent transition"
                                    >
                                        <i class="fas fa-user-check mr-2"></i> Presensi Siswa
                                    </button>
                                </nav>
                            </div>
                        </div>

                        <!-- Tugas & Kegiatan -->
                        <div v-if="activeTab === 'tasks'" class="space-y-8">
                            <!-- Form Tugas Baru -->
                            <div class="bg-white rounded-xl shadow-md p-6">
                                <h2 class="text-lg font-bold text-gray-800 mb-4">Tambah Tugas Baru</h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                    <div class="md:col-span-2">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Judul Tugas</label>
                                        <input
                                            type="text"
                                            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                            v-model="newTask.title"
                                            placeholder="Contoh: Mengerjakan soal Matematika"
                                        >
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Mata Pelajaran</label>
                                        <input
                                            type="text"
                                            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                            v-model="newTask.subject"
                                            placeholder="Contoh: Matematika"
                                        >
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Prioritas</label>
                                        <select
                                            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                            v-model="newTask.priority"
                                        >
                                            <option value="low">Rendah</option>
                                            <option value="medium">Sedang</option>
                                            <option value="high">Tinggi</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                                        <input
                                            type="date"
                                            class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                            v-model="newTask.deadline"
                                        >
                                    </div>
                                </div>
                                <button
                                    @click="addTask"
                                    class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center"
                                >
                                    <i class="fas fa-plus mr-2"></i> Tambah Tugas
                                </button>
                            </div>

                            <!-- Daftar Tugas -->
                            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4">
                                    <h2 class="text-xl font-bold text-white flex items-center">
                                        <i class="fas fa-tasks mr-3"></i> Daftar Tugas & Kegiatan
                                    </h2>
                                </div>
                                <div class="p-0">
                                    <div class="overflow-x-auto">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tugas</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Pelajaran</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioritas</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="task in tasks" :key="task.id" class="hover:bg-gray-50 transition">
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">{{ task.title }}</div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-blue-100 text-blue-800">
                                                            {{ task.subject }}
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                        {{ formatDate(task.deadline) }}
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full" :class="getPriorityColor(task.priority)">
                                                            {{ getPriorityText(task.priority) }}
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full" :class="getStatusColor(task.status)">
                                                            {{ getStatusText(task.status) }}
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            @click="toggleTaskStatus(task.id)"
                                                            class="text-purple-600 hover:text-purple-900 font-medium"
                                                        >
                                                            <i class="fas fa-sync-alt mr-1"></i> Ubah Status
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Presensi Siswa -->
                        <div v-else class="space-y-8">
                            <!-- Ringkasan Presensi -->
                            <div class="bg-white rounded-xl shadow-md p-6">
                                <h2 class="text-lg font-bold text-gray-800 mb-4">Ringkasan Presensi Hari Ini</h2>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div class="bg-green-50 p-4 rounded-lg text-center">
                                        <p class="text-3xl font-bold text-green-600">{{ attendanceSummary.present }}</p>
                                        <p class="text-sm text-green-800">Hadir</p>
                                    </div>
                                    <div class="bg-yellow-50 p-4 rounded-lg text-center">
                                        <p class="text-3xl font-bold text-yellow-600">{{ attendanceSummary.late }}</p>
                                        <p class="text-sm text-yellow-800">Terlambat</p>
                                    </div>
                                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                                        <p class="text-3xl font-bold text-blue-600">{{ attendanceSummary.permit }}</p>
                                        <p class="text-sm text-blue-800">Izin</p>
                                    </div>
                                    <div class="bg-red-50 p-4 rounded-lg text-center">
                                        <p class="text-3xl font-bold text-red-600">{{ attendanceSummary.absent }}</p>
                                        <p class="text-sm text-red-800">Absen</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Daftar Presensi -->
                            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
                                    <h2 class="text-xl font-bold text-white flex items-center">
                                        <i class="fas fa-user-check mr-3"></i> Data Presensi Siswa
                                    </h2>
                                    <p class="text-blue-100 text-sm mt-1">Klik tombol aksi untuk mengubah status kehadiran</p>
                                </div>
                                <div class="p-0">
                                    <div class="overflow-x-auto">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Siswa</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Siswa</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="(student, index) in students" :key="student.id" class="hover:bg-gray-50 transition">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ index + 1 }}</td>
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">{{ student.name }}</div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ student.studentId }}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" :class="getStatusColor(student.attendance)">
                                                            <span :class="getAttendanceColor(student.attendance)" class="attendance-dot"></span>
                                                            {{ getAttendanceText(student.attendance) }}
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            @click="toggleAttendance(student.id)"
                                                            class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs font-medium transition flex items-center"
                                                        >
                                                            <i class="fas fa-sync-alt mr-1"></i> Ubah
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Kebersihan Page -->
                    <div v-else-if="currentPage === 'kebersihan' && canAccess('kebersihan')">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800 flex items-center">
                                    <i class="fas fa-broom mr-3 text-yellow-600"></i> Kebersihan Kelas
                                </h1>
                                <p class="text-gray-600">Kelola jadwal dan status kebersihan area kelas XI-A</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <div class="flex space-x-2">
                                    <div class="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                                        <p class="text-sm">Area Bersih</p>
                                        <p class="text-xl font-bold">{{ cleanlinessSummary.clean }}</p>
                                    </div>
                                    <div class="bg-red-100 text-red-800 px-4 py-2 rounded-lg">
                                        <p class="text-sm">Area Kotor</p>
                                        <p class="text-xl font-bold">{{ cleanlinessSummary.dirty }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form Jadwal Baru -->
                        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                            <h2 class="text-lg font-bold text-gray-800 mb-4">Tambah Jadwal Kebersihan</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Area Kebersihan</label>
                                    <input
                                        type="text"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                                        v-model="newCleanliness.area"
                                        placeholder="Contoh: Depan kelas, Lorong, dll"
                                    >
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Penanggung Jawab</label>
                                    <input
                                        type="text"
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                                        v-model="newCleanliness.responsible"
                                        placeholder="Nama siswa"
                                    >
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Hari</label>
                                    <select
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                                        v-model="newCleanliness.day"
                                    >
                                        <option>Senin</option>
                                        <option>Selasa</option>
                                        <option>Rabu</option>
                                        <option>Kamis</option>
                                        <option>Jumat</option>
                                        <option>Sabtu</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Waktu</label>
                                    <select
                                        class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                                        v-model="newCleanliness.time"
                                    >
                                        <option>07.00-07.15</option>
                                        <option>07.15-07.30</option>
                                        <option>12.30-12.45</option>
                                        <option>14.00-14.15</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                @click="addCleanliness"
                                class="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center"
                            >
                                <i class="fas fa-plus mr-2"></i> Tambah Jadwal
                            </button>
                        </div>

                        <!-- Daftar Kebersihan -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                            <div class="bg-gradient-to-r from-yellow-600 to-amber-700 px-6 py-4">
                                <h2 class="text-xl font-bold text-white flex items-center">
                                    <i class="fas fa-broom mr-3"></i> Jadwal & Status Kebersihan
                                </h2>
                            </div>
                            <div class="p-0">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penanggung Jawab</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hari</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="item in cleanliness" :key="item.id" class="hover:bg-gray-50 transition">
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900">{{ item.area }}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ item.responsible }}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                    <span class="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-blue-100 text-blue-800">
                                                        {{ item.day }}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ item.time }}</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full" :class="getStatusColor(item.status)">
                                                        {{ getStatusText(item.status) }}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm">
                                                    <button
                                                        @click="toggleCleanlinessStatus(item.id)"
                                                        class="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded text-xs font-medium transition flex items-center"
                                                    >
                                                        <i class="fas fa-exchange-alt mr-1"></i> Toggle Status
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Access Denied -->
                    <div v-else class="h-full flex items-center justify-center">
                        <div class="text-center max-w-md mx-auto p-8">
                            <div class="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <i class="fas fa-lock text-3xl text-red-600"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-800 mb-2">Akses Ditolak</h2>
                            <p class="text-gray-600 mb-6">Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi ketua kelas untuk mendapatkan akses.</p>
                            <button
                                @click="navigateTo('dashboard')"
                                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition inline-flex items-center"
                            >
                                <i class="fas fa-arrow-left mr-2"></i> Kembali ke Dashboard
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            <!-- Footer -->
            <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 mt-auto">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-4 md:mb-0">
                            <p class="text-gray-300">
                                © 2026 <a href="https://akmalmr.my.id/" class="text-blue-300 hover:text-blue-100 transition" target="_blank">Muhammad Ridhani Akmal</a>. All rights reserved.
                            </p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-gray-400">Kelas XI-A - MAN 2 Kota Banjarmasin</span>
                            <span class="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">{{ version }}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    `
}).mount('#app');

// Variabel untuk tab aktif di halaman sekretaris
VueApp = null; // Untuk akses global jika diperlukan
