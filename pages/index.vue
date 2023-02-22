<script lang="ts" setup>
definePageMeta({
    layout: 'index',
});

const CVTitle = resolveComponent('CVTitle');
const CVContactInfo = resolveComponent('CVContactInfo');
</script>

<template>
    <div>
        <p class="text-center text-xl">Tan Duong Van 1121</p>
        <p class="text-center">Backend Engineer</p>
    </div>
    <div class="w-full flex justify-center">
        <CVContactInfo info="Yen Thang, Y Yen, Nam Dinh" class="" />
        <CVContactInfo type="email" info="tandv.jobs@gmail.com" class="mx-2" />
        <CVContactInfo type="phone" info="0352872240" class="mx-2" />
        <CVContactInfo type="link" text="LinkedIn" info="https://www.linkedin.com/in/tan-duong-van-106789126/" />
    </div>
    <div class="w-full">
        <CVTitle title="Summary">
            <p>
                Backend Engineer with over 4 years of experience in developing and maintaining complex
                software applications using Java and Spring Boot. Extensive experience in deploying
                WebService systems for monitoring and controlling self-driving cars and drones, communicating
                with robot systems (ROS) through MQTT protocol, and integrating them into the WebService
                system. Also experienced in implementing RESTful APIs for both mobile and web. With over 1
                year of experience in Frontend development using React Native, Vue.js, and optimizing
                WordPress sites.
                <br>
                I am always dedicated and serious in my work and constantly seeking to improve my skills and
                knowledge through research.
            </p>
        </CVTitle>
        <CVTitle title="Technical Skills" />
        <p>
            Java (4+ years of experience).
             Spring Boot (3+ years of experience).
             Hibernate (3+ years of experience).
             Database: MySQL and MongoDB (3+ years of experience).
             Web/app development: HTML, CSS. JS. ReactJS, React Native, VueJS, WordPress,
            WebSocket.
             Build Tools: GitLab CI/CD, Docker.
             Project tools: JIRA software.
             Operating system: Linux, VPS, Linux server, Window.
             IoT: ROS comunication, MQTT Bridge.
             Experience with RESTful API design and implementation.
             Proficient in Git and familiar with Agile/Scrum development
        </p>
        <CVTitle title="Professional Experience" />

        <CVTitle title="Education">
            University of Engineering and Technology, VNU 09/2013 – 07/2018
            Bachelor of Information Technology
        </CVTitle>

        <CVTitle title="Additional Information">
            Languages: Vietnamese (Native), English.
        </CVTitle>
    </div>
</template>