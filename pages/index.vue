<script lang="ts" setup>
definePageMeta({
    layout: 'index',
});

const CVTitle = resolveComponent('CVTitle');
const CVContactInfo = resolveComponent('CVContactInfo');
const CVWorkInfo = resolveComponent('CVWorkInfo');
const CVSkillDetails = resolveComponent('CVSkillDetails');
</script>

<template>
    <div>
        <p class="text-center text-xl">Tan Duong Van</p>
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
        <CVTitle title="Technical Skills">
            <ul class="list-disc pl-6">
                <li>
                    <CVSkillDetails skill-title="Backend Development" skill-details="Java, Spring Boot, Nodejs" />
                </li>
                <li>
                    <CVSkillDetails skill-title="Backend Development" skill-details="Java, Spring Boot, Nodejs" />
                </li>
                <li>
                    <CVSkillDetails skill-title="Backend Development" skill-details="Java, Spring Boot, Nodejs" />
                </li>
                <li>
                    <CVSkillDetails  skill-details="Java, Spring Boot, Nodejs" />
                </li>
            </ul>
        </CVTitle>
        <CVTitle title="Professional Experience">
            <CVWorkInfo 
                company-link="https://phenikaa-x.com"
                company-name="Phenikaa-X JSC" 
                company-address="Ha Dong, Ha Noi"
                work-position="Web Application Engineer" 
                work-period="06/2021 - Present"
                project-name="Reseach and develop control application and webservice for self-driving car and drone"
                project-description="Reseach and develop control application and webservice for self-driving car and drone"
                project-technologies="Spring Boot, MongoDB, Redis, Docker, Vuejs, ReactJs"
                :project-responsibilities="[
                    `Developed and deployed WebService system for monitoring and controlling self-driving
                    cars and drones, ensuring smooth communication between the systems and the control
                    center.`,
                    `Implemented communication between the backend and Robot Operating System (ROS)
                    to exchange data and control signals using MQTT protocol.`,
                    `Improved application performance by optimizing database queries and implementing
                    caching mechanisms`,
                    `Implemented industry best practices, such as data validation and error handling, to ensure
                    the reliability and security of the applications.`
                ]"
                 />
            <CVWorkInfo 
                company-link="https://khoitaodoanhnghiep.com"
                company-name="FADI JSC" 
                company-address="Nam Dinh" 
                work-position="Web Application Developer"
                work-period="02/2019 - 02/2021" />
            <CVWorkInfo 
                company-name="ABA Golf" 
                company-address="Hoang Quoc Viet, Ha Noi" 
                work-position="Frontend Developer"
                work-period="08/2019 - 02/2019" />
        </CVTitle>

        <CVTitle title="Education">
            <CVWorkInfo 
                company-name="University of Engineering and Technology, VNU" 
                company-address="09/2013 – 07/2018"
                work-position="Bachelor of Information Technology" />
        </CVTitle>

        <CVTitle title="Additional Information">
            Languages: Vietnamese (Native), English.
        </CVTitle>
    </div>
</template>