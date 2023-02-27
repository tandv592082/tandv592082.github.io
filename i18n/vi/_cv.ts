export default {
    persionalInfo: {
        fullname: 'Dương Văn Tân',
        position: 'Backend Engineer',
        email: `tandv.jobs{'@'}gmail.com`,
        phone: '0352872240',
        linkedin: 'https://www.linkedin.com/in/tan-duong-van-106789126/'
    },
    summary:{
        0: `Kỹ sư Backend với hơn 4 năm kinh nghiệm trong phát triển và duy trì các hệ thống Web Service bằng NodeJS và MongoDB. Cũng có kinh nghiệm trong việc thu thập dữ liệu nhằm giám sát, điều khiển xe tự lái, máy bay không người lái thông qua giao tiếp với hệ thống robot (ROS) bằng giao thức MQTT. Đồng thời có hơn 1 năm kinh nghiệm trong phát triển các ứng dụng phía front-end sử dụng React Native, Vue.js, và tối ưu hóa các trang WordPress.`,
        1: `Tôi luôn tận tâm và nghiêm túc với công việc để tạo ra giá trị cho công ty. Đồng thời luôn tìm tòi học hỏi, trau dồi kiến ​​thức, kỹ năng để trở thành một kỹ sư giỏi.`
    },
    skills: {
        0: {
            title: `Ngỗn ngữ lập trình`,
            details: 'JavaScript(hơn 4 năm), Java(Hơn 1 năm)',
        },
        1: {
            title: `Hệ thống quản lý cơ sở dữ liệu`,
            details: 'MongoDB, MySQL',
        },
        2: {
            title: `Frameworks/Platforms`,
            details: 'NodeJS (Express, Fastify), Docker, Redis, ReactJS, React Native, VueJS, JQuery, WebSocket, Wordpress, CI/CD with Gitlab.',
        },
        3: {
            title: `Version Control`,
            details: 'Git, SVN.',
        },
        4: {
            title: `IoT`,
            details: 'MQTT, giao tiếp với hệ thống ROS.',
        },
        5: {
            title: `Hệ điều hành`,
            details: 'Linux, VPS, Linux server, Window.',
        },
        6: {
            details: 'Có kinh nghiệm thiết kế và triển khai RESTful API.',
        },
        7: {
            details: 'Quen thuộc với các phương pháp phát triển Agile/Scrum.',
        },
        8: {
            details: 'Cố vấn và đánh giá chất lượng code.',
        },
    },
    workExperience: {
        0: {
            company: {
                name: 'Phenikaa-X JSC',
                address: 'Hà Đông, Hà Nội',
                link: 'https://phenikaa-x.com'
            },
            job: {
                position: 'Web Application Engineer',
                period: '06/2021 - Hiện tại',
            },
            project: {
                title: 'X Bus và Drone in a Box (DIB) Web Service.',
                description: 'Triển khai các ứng dụng theo dõi, điều khiển và web service cho xe tự lại và máy bay không người lại',
                technologies: 'Nodejs(Express, Fastify), MongoDB, Redis, Docker, MQTT, React & Redux, Vuejs & VueX, WebSocket.',
                responsibilities: {
                    0: `Xây dựng cấu ​​trúc, quy ước viết code và thiết lập hệ thống CI/CD cho tất cả các dự án front-end và back-end (bao gồm linter, unit test, build script bằng Docker).`,
                    1: `Giao tiếp với các bên liên quan để xây dựng và thiết kế hệ thống WebService.`,
                    2: `Thiết kế lược đồ cơ sở dữ liệu và triển khai hệ thống back-end để quản lý dữ liệu từ hệ thống Robot(cả XBUS và DIB) và cung cấp cho ứng dụng front-end.`,
                    3: `Triển khai giao tiếp giữa hệ thống back-end và hệ thống Robot thông qua giao thức MQTT nhằm thu thập dữ liệu và ra lệnh.`,
                    4: `Tối ưu quá trình đọc, ghi dữ liệu từ Web Socket vào MongoDB bằng cách cải thiện các truy vấn cơ sở dữ liệu và sử dụng Redis.`,
                    5: `Nghiên cứu và xây dựng service trên drone nhằm giải mã thông tin dữ liệu, ra lệnh và giao tiếp với hệ thống back-end thông qua WebSocket.`,
                    6: `Giúp đỡ đồng nghiệp cấp dưới giải quyết các vấn đề và đánh giá chất lượng code.`
                }
            }
        },
        1: {
            company: {
                name: 'FADI JSC',
                address: 'Nam Định',
                link: 'https://khoitaodoanhnghiep.com'
            },
            job: {
                position: 'Web Application Developer',
                period: '02/2019 - 02/2021',
            },
            project: {
                title: 'FADI Web Service.',
                description: 'A system that helps to link and track customer contact data from WordPress pages, as well as improve the workflow of the company.',
                technologies: 'Nodejs(Express), MongoDB, Docker, VueJS & VueX, Wordpress, Webpack.',
                responsibilities: {
                    0: `Xây dựng cấu ​​trúc, quy ước viết code cho các dự án front-end và back-end (bao gồm linter, unit test, build script bằng Docker).`,
                    1: `Giao tiếp với cấp trên để thiết kế và xây dựng hệ thống back-end để tối ưu hóa quy trình làm việc của công ty.`,
                    2: `Thiết kế lược đồ cơ sở dữ liệu và triển khai các module chính của phía back-end.`,
                    3: `Cấu trúc lại hệ thống giao diện và tối ưu hóa tốc độ tải WordPress của công ty. Liên kế dữ liệu liên hệ của người dùng thông qua API.`
                }
            }
        },
        2: {
            company: {
                name: 'ABAGolf',
                address: 'Hoàng Quốc Việt, Hà Nội',
                link: `{'#'}`
            },
            job: {
                position: 'Frontend Developer',
                period: '08/2018 - 02/2019',
            },
            project: {
                title: 'ABAGolf, Feeby.',
                description: 'ABAGolf là ứng dụng dành cho người chơi gôn, nó giúp tổ chức giải và xem điểm trực tiếp,  tính HDC tự động, đặt sân gôn và có thể tạo nhóm trò chuyện. Feeby là ứng dụng giúp  khách hàng đánh giá và nhận mã khuyến mãi sau khi sử dụng dịch vụ của cửa hàng.',
                technologies: 'Nodejs(Express), MongoDB, Vuejs & VueX, React Native & Redux, Bootstrap.',
                responsibilities: {
                    0: `Phát triển giao diện ứng dụng dựa trên Figma sử dụng React Native.`,
                    1: `Triển khai Redux để quản lý trạng thái và tích hợp với REST API để truy xuất dữ liệu.`,
                    2: `Xây dựng các thành phần giao diện trang quản lý đánh giá của người dùng sử dụng Bootstrap và Vuejs.`,
                }
            }
        }
    },
    education: {
        university: {
            name: 'Đại học Công Nghệ, ĐHQGHN',
            address: 'Cầu Giấy, Hà Nội'
        },
        information: {
            degree: 'Cử nhân Công Nghệ Thông Tin',
            period: '09/2013 – 07/2018'
        }
    },
    additionalInformation: {
        0: 'Ngôn ngữ: Tiếng Việt(gốc), Tiếng Anh'
    }

}