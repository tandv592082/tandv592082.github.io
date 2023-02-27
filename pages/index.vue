<script lang="ts" setup>
import { now } from '~~/utils/date'
import {getExperienceKeys, getPersonalSummaryKeys, getRespTransalteByIndex, getSkillKeys, getAdditionalInfoKeys} from '~/i18n'

definePageMeta({
    layout: 'index',
});


const CVTitle = resolveComponent('CVTitle');
const CVContactInfo = resolveComponent('CVContactInfo');
const CVWorkInfo = resolveComponent('CVWorkInfo');
const CVSkillDetails = resolveComponent('CVSkillDetails');
const { isLoading } = useSavePDF();

</script>

<template>
    <div class="mb-8">
        <p class="text-center text-3xl font-medium text-black dark:text-white">{{ $t('cv.persionalInfo.fullname') }}</p>
        <p class="text-center text-xl font-medium">{{ $t('cv.persionalInfo.position') }}</p>
        <div class="w-full flex justify-center mt-2">
            <CVContactInfo type="email" :info="$t('cv.persionalInfo.email')" />
            <CVContactInfo type="phone" :info="$t('cv.persionalInfo.phone')" />
            <CVContactInfo 
                type="link" 
                text="LinkedIn" 
                :info="$t('cv.persionalInfo.linkedin')" 
                :has-right-divider="false"/>
        </div>
    </div>
    <div class="w-full">
        <CVTitle :title="$t('system.CVHeaderTitle.summary')">
            <div>
               <p :key="index" v-for="(summary, index) in getPersonalSummaryKeys()" :class="index && 'mt-2'">{{ $t(`cv.summary.${summary}`) }}</p>
            </div>
        </CVTitle>
        <CVTitle :title="$t('system.CVHeaderTitle.skills')" class="mt-4">
            <ul class="list-disc pl-6">
                <li v-for="(skill, index) of getSkillKeys()" :key="index">
                    <CVSkillDetails :skill-title="$t(`cv.skills.${skill}.title`)" :skill-details="$t(`cv.skills.${skill}.details`)" />
                </li>
            </ul>
        </CVTitle>
        <CVTitle :title="$t('system.CVHeaderTitle.experience')" class="mt-4">
            <CVWorkInfo 
                v-for="(work, index) in getExperienceKeys()"
                :company-link="$t(`cv.workExperience.${work}.company.link`)"
                :company-name="$t(`cv.workExperience.${work}.company.name`)" 
                :company-address="$t(`cv.workExperience.${work}.company.address`)"
                :work-position="$t(`cv.workExperience.${work}.job.position`)" 
                :work-period="$t(`cv.workExperience.${work}.job.period`)"
                :project-name="$t(`cv.workExperience.${work}.project.title`)"
                :project-description="$t(`cv.workExperience.${work}.project.description`)"
                :project-technologies="$t(`cv.workExperience.${work}.project.technologies`)"
                :project-responsibilities="getRespTransalteByIndex(work, $t)"
                :class="index && 'mt-4'"
                 />
        </CVTitle>

        <CVTitle :title="$t('system.CVHeaderTitle.education')" class="mt-4">
            <CVWorkInfo 
                :company-name="$t('cv.education.university.name')" 
                :company-address="$t('cv.education.university.address')"
                :work-position="$t('cv.education.information.degree')"
                :work-period="$t('cv.education.information.period')" />
        </CVTitle>

        <CVTitle :title="$t('system.CVHeaderTitle.additionalInformation')" class="mt-4">
            <p v-for="info in getAdditionalInfoKeys()">{{ $t(`cv.additionalInformation.${info}`) }}</p>
        </CVTitle>
        
        <div class="text-sm flex justify-between mt-10" v-if="isLoading">
            <p >{{now()}}</p>
            <p> {{ $t('system.messages.savePDF.autogen') }}</p>
        </div>
    </div>
</template>