import cv from './_cv'

export default {
    cv,
    settings: {
        languages: {
            title: 'Chọn ngôn ngữ',
            vi: 'Tiếng Việt',
            en: 'Tiếng Anh'
        },
        download: {
            title: 'Tải xuống CV',
            vi: 'Bản tiếng Việt',
            en: 'Bản tiếng Anh'
        }
    },
    system: {
        CVHeaderTitle: {
            summary: 'tóm tắt',
            skills: 'Kỹ năng',
            experience: 'Kinh nghiệm làm việc',
            education: 'Học vấn',
            additionalInformation: 'Thông tin thêm'
        },
        CVWorkDetails: {
            project: 'Dự án',
            description: 'Mô tả',
            technologies: 'Công nghệ sử dụng',
            responsibilities: 'Trách nhiệm'
        },
        messages: {
            savePDF: {
                error: 'Lỗi',
                errorMgs: 'Có lỗi xảy ra',
                changeThemeDark: 'Đang thay đổi sang chế độ tối...',
                changeThemeLight: 'Đang thay đổi sang chế độ sáng...',
                'changeLang-vi': 'Thay đổi sang ngôn ngữ sang tiếng Việt...',
                'changeLang-en': 'Thay đổi sang ngôn ngữ sang tiếng Anh...',
                autogen: 'CV này được tạo tự động bởi hệ thống.'
            }
        },
        footer: {
            intro: 'Powered by Nuxt3. Designed by me'
        }

    },
    app: {
        name: `Dương Văn Tân`,
        content: `Dương Văn Tân`,
        footer: {
            
        }
    }
}