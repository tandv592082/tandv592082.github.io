export default {
    persionalInfo: {
        fullname: 'Tan Duong Van',
        position: 'Backend Engineer',
        email: `tandv.jobs{'@'}gmail.com`,
        phone: '0352872240',
        linkedin: 'https://www.linkedin.com/in/tan-duong-van-106789126/'
    },
    summary:{
        0: `Backend Engineer with over 4 years of experience in developing and maintaining complex software
            applications using Java and Spring Boot. Extensive experience in deploying WebService systems
            for monitoring and controlling self-driving cars and drones, communicating with robot systems 
            (ROS) through MQTT protocol, and integrating them into the WebService system. 
            Also experienced in implementing RESTful APIs for both mobile and web. With over 1 year of experience in 
            Frontend development using React Native, Vue.js, and optimizing WordPress sites.`,
        1: `I am always dedicated and serious in my work and constantly seeking to improve my skills and knowledge through research.`
    },
    skills: {
        0: {
            title: `Programming Languages`,
            details: 'JavaScript(4+ years), Java(1+ year)',
        },
        1: {
            title: `Database Management System`,
            details: 'MongoDB, MySQL',
        },
        2: {
            title: `Frameworks/Platforms`,
            details: 'NodeJS, Docker, Redis, ReactJS, React Native, VueJS, JQuery, WebSocket, Wordpress.',
        },
        3: {
            title: `Version Control`,
            details: 'Git, SVN.',
        },
        4: {
            title: `IoT`,
            details: 'MQTT, ROS comunication.',
        },
        5: {
            title: `Operating system`,
            details: 'Linux, VPS, Linux server, Window.',
        },
        6: {
            details: 'Familiar with Agile/Scrum development methodologies.',
        },
        7: {
            details: 'Mentoring and code reviews',
        },
    },
    workExperience: {
        0: {
            company: {
                name: 'Phenikaa-X JSC',
                address: 'Ha Dong, Ha Noi',
                link: 'https://phenikaa-x.com'
            },
            job: {
                position: 'Web Application Engineer',
                period: '06/2021 - Present',
            },
            project: {
                title: 'X Bus and Drone in a Box (DIB) Web Service.',
                description: 'Both X Bus and DIB Web Service are systems that help to collect data, manage and give commands to the real-time robot system.',
                technologies: 'Nodejs, MongoDB, Redis, Docker, MQTT, React Native, Vuejs.',
                responsibilities: {
                    0: `Developed and deployed WebService system for monitoring and controlling self-driving cars and drones, ensuring smooth communication between the systems and the control center`,
                    1: `Implemented communication between the backend and Robot Operating System (ROS) to exchange data and control signals using MQTT protocol.`,
                    2: `Improved application performance by optimizing database queries and implementing caching mechanisms`,
                    3: `Implemented industry best practices, such as data validation and error handling, to ensure the reliability and security of the applications.`
                }
            }
        },
        1: {
            company: {
                name: 'FADI JSC',
                address: 'Nam Dinh',
                link: 'https://khoitaodoanhnghiep.com'
            },
            job: {
                position: 'Web Application Developer',
                period: '02/2019 - 02/2021',
            },
            project: {
                title: 'FADI Web Service.',
                description: 'A system that helps to link and track customer contact data from WordPress pages, as well as improve the workflow of the company.',
                technologies: 'Nodejs, MongoDB, Docker, ReactJS, VueJS, Wordpress.',
                responsibilities: {
                    0: `Developed and deployed WebService system for monitoring and controlling self-driving cars and drones, ensuring smooth communication between the systems and the control center`,
                    1: `Implemented communication between the backend and Robot Operating System (ROS) to exchange data and control signals using MQTT protocol.`,
                    2: `Improved application performance by optimizing database queries and implementing caching mechanisms`,
                    3: `Refactor the interface and optimizing the loading speed of the company's WordPress website. Linking user contact data with the backend through API.`
                }
            }
        },
        2: {
            company: {
                name: 'ABAGolf',
                address: 'Hoang Quoc Viet, Ha Noi',
                link: `{'#'}`
            },
            job: {
                position: 'Frontend Developer',
                period: '08/2018 - 02/2019',
            },
            project: {
                title: 'ABAGolf, Feeby.',
                description: 'ABAGolf is a golf application designed for golf players, which helps organize tournaments and view scores in real-time, automatically calculate handicaps, book golf courses, and create chat groups. Feeby is an application that allows customers to review and receive discount codes after using the services of a store.',
                technologies: 'Nodejs, MongoDB, Vuejs, React Native, Bootstrap.',
                responsibilities: {
                    0: `Developed an app interface based on Figma design using React Native.`,
                    1: `Implemented Redux for state management and integrated with RESTf API for data retrieval.`,
                    2: `Building interface components for the user's review management page using Bootstrap and Vuejs.`,
                }
            }
        }
    },
    education: {
        university: {
            name: 'University of Engineering and Technology, VNU',
            address: 'Cau Giay, Ha Noi'
        },
        information: {
            degree: 'Bachelor of Information Technology',
            period: '09/2013 – 07/2018'
        }
    },
    additionalInformation: {
        0: 'Languages: Vietnamese (Native), English'
    }

}