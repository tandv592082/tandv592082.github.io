export default {
    persionalInfo: {
        fullname: 'Tan Duong Van',
        position: 'Backend Engineer',
        email: `tandv.jobs{'@'}gmail.com`,
        phone: '0352872240',
        linkedin: 'https://www.linkedin.com/in/tan-duong-van-106789126/'
    },
    summary:{
        0: `Backend engineer with over 4 years of experience in developing and maintaining Web Service systems using NodeJS and MongoDB. Also experienced in collecting data for monitoring and controlling self-driving cars, unmanned aerial vehicles through communication with robot systems (ROS) using MQTT protocol. Additionally, has over 1 year of experience in developing front-end applications using React Native, Vue.js, and optimizing WordPress sites.`,
        1: `I am always dedicated and serious about my work to create value for the company. At the same time, I always seek to learn and improve my skills and knowledge to become a good engineer.`
    },
    skills: {
        0: {
            title: `Programming Languages`,
            details: 'JavaScript(4+ years), Python(1+ year)',
        },
        1: {
            title: `Database Management System`,
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
            details: 'MQTT, ROS comunication.',
        },
        5: {
            title: `Operating system`,
            details: 'Linux, VPS, Linux server, Window.',
        },
        6: {
            title: `Other tools`,
            details: 'JIRA, Postman, Swagger.',
        },
        7: {
            details: 'Experience with RESTful API design and implementation.',
        },
        8: {
            details: 'Familiar with Agile/Scrum development methodologies.',
        },
        9: {
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
                technologies: 'Nodejs(Express, Fastify), MongoDB, Redis, Docker, MQTT, React & Redux, Vuejs & VueX, WebSocket.',
                responsibilities: {
                    0: `Define the architecture, coding convention, and setup CI/CD system for all front-end and back-end projects (includes linter, unit test, build script using Docker).`,
                    1: `Communicate with relevant parties to build and design the WebService system.`,
                    2: `Design database schemas and implement back-end system to manage data from the Robot system (both XBus and DIB) and provide it to the front-end application.`,
                    3: `Reseach and develop the communication between the back-end system and the X Bus system via the MQTT protocol to collect data and send commands.`,
                    4: `Optimize the process of reading and writing data from WebSocket to MongoDB by improving database queries and utilizing Redis.`,
                    5: `Reseach and develop a service on the drone to decode data, send commands, and communicate with the back-end system via WebSocket.`,
                    6: `Help junior developers in solving issues and review code quanlity.`
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
                technologies: 'Nodejs(Express), MongoDB, Docker, VueJS & VueX, Wordpress, Webpack.',
                responsibilities: {
                    0: `Define the architecture, coding convention front-end and back-end projects (includes linter, unit test, build script using Docker).`,
                    1: `Communicate with superiors to design and build a back-end system to optimize the workflow of the company.`,
                    2: `Designing the database schemas and implementing the main modules of the back-end.`,
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
                technologies: 'Nodejs(Express), MongoDB, Vuejs & VueX, React Native & Redux, Bootstrap.',
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