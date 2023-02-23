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
    <div class="mb-8">
        <p class="text-center text-3xl font-medium">Tan Duong Van</p>
        <p class="text-center text-xl text-dark-50">Backend Engineer</p>
        <div class="w-full flex justify-center">
            <CVContactInfo info="Yen Thang, Y Yen, Nam Dinh"/>
            <CVContactInfo type="email" info="tandv.jobs@gmail.com" />
            <CVContactInfo type="phone" info="0352872240" />
            <CVContactInfo 
                type="link" 
                text="LinkedIn" 
                info="https://www.linkedin.com/in/tan-duong-van-106789126/" 
                :has-right-divider="false"/>
        </div>
    </div>
    <div class="w-full">
        <CVTitle :title="$t('system.CVHeaderTitle.summary')">
            <div>
               <p>
                Backend Engineer with over 4 years of experience in developing and maintaining complex
                software applications using Java and Spring Boot. Extensive experience in deploying
                WebService systems for monitoring and controlling self-driving cars and drones, communicating
                with robot systems (ROS) through MQTT protocol, and integrating them into the WebService
                system. Also experienced in implementing RESTful APIs for both mobile and web. With over 1
                year of experience in Frontend development using React Native, Vue.js, and optimizing
                WordPress sites.
               </p>
                
               <p class="mt-2">
                I am always dedicated and serious in my work and constantly seeking to improve my skills and
                knowledge through research.
               </p>
            </div>
        </CVTitle>
        <CVTitle :title="$t('system.CVHeaderTitle.skills')">
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
        <CVTitle :title="$t('system.CVHeaderTitle.experience')">
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

        <CVTitle :title="$t('system.CVHeaderTitle.education')">
            <CVWorkInfo 
                company-name="University of Engineering and Technology, VNU" 
                company-address="09/2013 – 07/2018"
                work-position="Bachelor of Information Technology" />
        </CVTitle>

        <CVTitle :title="$t('system.CVHeaderTitle.additionalInformation')">
            Languages: Vietnamese (Native), English.
        </CVTitle>
    </div>
</template>