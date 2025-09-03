// ===================================================================
// SIMPLE AUTH SYSTEM - VERIFIED WORKING VERSION
// ===================================================================

window.SimpleAuth = {
    getCurrentUser: function() {
        try {
            const userData = localStorage.getItem('satker_current_user');
            if (userData) {
                const user = JSON.parse(userData);
                if (user && user.username) {
                    return user;
                }
            }
            return null;
        } catch (error) {
            console.warn('Error getting user:', error);
            return null;
        }
    },

    login: function(username, password) {
        try {
            const users = this.getUsers();
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                localStorage.setItem('satker_current_user', JSON.stringify(user));
                return { success: true, user: user };
            } else {
                return { success: false, error: 'Username atau password salah' };
            }
        } catch (error) {
            return { success: false, error: 'System error' };
        }
    },

    logout: function() {
        try {
            localStorage.removeItem('satker_current_user');
            localStorage.removeItem('satker_progress_data');
            sessionStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    },

    getUsers: function() {
        try {
            let users = [];
            const stored = localStorage.getItem('satker_users_db');
            
            if (stored) {
                users = JSON.parse(stored);
            }
            
            if (users.length === 0) {
                console.log('🔧 Creating users from completeSatkerData...');
                users = this.createAllUsers();
                localStorage.setItem('satker_users_db', JSON.stringify(users));
            }
            
            return users;
        } catch (error) {
            return this.createAllUsers();
        }
    },

    createAllUsers: function() {
        const users = [];
        
        // Add super admin
        users.push({
            username: 'superadmin',
            password: 'admin123',
            fullName: 'Super Administrator',
            role: 'super_admin',
            satkerCode: 'ALL',
            satkerName: 'All Satuan Kerja'
        });
        
        // Create users from satker data - DATABASE-FIRST APPROACH
        if (typeof completeSatkerData !== 'undefined' && completeSatkerData.length > 0) {
            completeSatkerData.forEach((satker, index) => {
                // CRITICAL: Only create users with verified codes from database
                if (!satker.code) {
                    console.warn(`⚠️ Skipping ${satker.name} - no verified code in database`);
                    return; // Skip entries without verified codes
                }
                
                const username = this.generateUsername(satker.name);
                users.push({
                    id: `user_${index + 1}`,
                    username: username,
                    password: 'password123',
                    fullName: `Admin ${satker.name}`,
                    role: 'satker_admin',
                    satkerCode: satker.code,  // ✅ ALWAYS use database code - NEVER generate!
                    satkerName: satker.name,
                    provinsi: satker.provinsi,
                    kabupaten: satker.kabupaten,
                    codeVerified: true  // Mark as database-verified
                });
            });
            console.log(`✅ Created ${users.length - 1} verified satker users + 1 super admin`);
            console.log(`🔍 All users have database-verified satkerCodes - zero generation policy enforced`);
        }
        
        return users;
    },

    generateUsername: function(satkerName) {
        // Replicate OLD system logic exactly
        return satkerName
            .toLowerCase()
            .replace(/dinas|biro|pusat|direktorat|balai|inspektorat/g, '')
            .replace(/tenaga kerja dan transmigrasi|transmigrasi dan tenaga kerja/g, 'naker')
            .replace(/kementerian|provinsi|kabupaten|kota/g, '')
            .replace(/[^a-z0-9]/g, '')
            .substring(0, 15) || 'user';
    },

    isLoggedIn: function() {
        return this.getCurrentUser() !== null;
    },

    updateDisplay: function() {
        // Update user display in UI if elements exist
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) return;

            // Update user avatar and info if elements exist
            const userAvatar = document.querySelector('.user-avatar');
            const userNameElement = document.querySelector('.user-info h3, .user-name');
            const userRoleElement = document.querySelector('.user-info p, .user-role');
            const dropdownNameElement = document.querySelector('.dropdown-header h4');
            const dropdownEmailElement = document.querySelector('.dropdown-header p');
            
            if (userAvatar) {
                userAvatar.textContent = currentUser.username.substring(0, 2).toUpperCase();
            }
            
            if (userNameElement) {
                userNameElement.textContent = currentUser.fullName || currentUser.username;
            }
            
            if (userRoleElement) {
                const roleText = currentUser.role === 'super_admin' ? 'Super Administrator' : 
                               currentUser.role === 'satker_admin' ? 'Satker Admin' : 
                               currentUser.role;
                userRoleElement.textContent = roleText;
            }
            
            if (dropdownNameElement) {
                dropdownNameElement.textContent = currentUser.fullName || currentUser.username;
            }
            
            if (dropdownEmailElement) {
                dropdownEmailElement.textContent = currentUser.email || `${currentUser.username}@kementrans.go.id`;
            }

            console.log('✅ User display updated for:', currentUser.username);
            
        } catch (error) {
            console.warn('⚠️ Could not update user display:', error);
            // Don't throw error, just log warning
        }
    }
};

console.log('✅ Simple Auth loaded successfully');
