const updates = [
    {
        version: "v2.0.1",
        date: "2025-09-10",
        description: "修复了启动器崩溃问题，优化了内存使用效率，添加了新的主题支持"
    },
    {
        version: "v2.0.0",
        date: "2025-08-25", 
        description: "重大版本更新：全新UI设计，支持多账户管理，改进的模组管理功能"
    },
    {
        version: "v1.2.3",
        date: "2025-07-15",
        description: "修复了网络连接问题，优化了下载速度，添加了自动更新检查功能"
    },
    {
        version: "v1.2.0",
        date: "2025-06-20",
        description: "新增皮肤库功能，改进的用户界面，更好的兼容性支持"
    }
];

function loadUpdates() {
    const updatesList = document.getElementById('updatesList');
    updatesList.innerHTML = '';
    
    updates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.className = 'update-item';
        updateElement.innerHTML = `
            <div class="update-header">
                <span class="update-version">${update.version}</span>
                <span class="update-date">${update.date}</span>
            </div>
            <p class="update-description">${update.description}</p>
        `;
        updatesList.appendChild(updateElement);
    });
}

function downloadFile() {
    const downloadUrl = 'https://wwno.lanzoub.com/i1KWP35v9f4d';
    const password = 'PCL';
    
    if (confirm('即将跳转到蓝奏云下载页面，请在弹出的页面中输入密码: PCL\n\n点击"确定"继续')) {
        window.open(downloadUrl, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadUpdates();
    
    console.log('Plain Craft Launcher 2 下载网站已加载');
});