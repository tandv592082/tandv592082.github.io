<script lang="ts" setup>
const props = defineProps({
    companyName: {
        type: String,
        require: true
    },
    companyLink: {
        type: String,
        require: false,
    },
    companyAddress: {
        type: String,
        require: true
    },
    workPosition: {
        type: String,
        require: true,
    },
    workPeriod: {
        type: String,
        require: false
    },
    projectName: {
        type: String,
        require: true
    },
    projectDescription: {
        type: String,
        require: true,
    },
    projectTechnologies: {
        type: String,
        require: true
    },
    projectResponsibilities: {
        type: Array<String>,
        require: true
    }
})
</script>

<template>
    <!-- <div class="html2pdf__page-break"></div> -->
    <div class="flex flex-col items-start w-full">
        <div class="flex justify-between w-full my-1 text-dark-500 dark:text-gray-200">
            <p class="font-semibold">{{ props.workPosition }}</p>
            <p class="font-semibold" v-if="props.workPeriod">{{ props.workPeriod }}</p>
        </div>
        <div class="flex justify-between w-full">
            <a v-if="props.companyLink" :href="props.companyLink"  class=" dark:text-white italic" :target="props.companyLink === '#' ? '_self' : '_blank'" rel="noopener">
                {{ props.companyName }}
            </a>
            <p v-else class="italic">
                {{ props.companyName }}
            </p>
            <p class="italic">{{ props.companyAddress }}</p>
        </div>
        
        <div class="mt-3" v-if="props.projectName">
            <p>
                <span class="font-semibold">
                    {{ $t('system.CVWorkDetails.project') }}:
                </span>
                {{ props.projectName }}
            </p>
            <ul class="list-disc ml-8">
                <li class="mt-1">
                    <p>
                        <span class="font-semibold">
                            {{ $t('system.CVWorkDetails.description') }}:
                        </span>
                        {{ props.projectDescription }}
                    </p>
                </li>
                <li class="mt-1">
                    <p>
                        <span class="font-semibold">
                            {{ $t('system.CVWorkDetails.technologies') }}:
                        </span>
                        {{ props.projectTechnologies }}
                    </p>
                </li>
                <li class="mt-1">
                    <p class="font-semibold">{{ $t('system.CVWorkDetails.responsibilities') }}:</p>
                    <ul class="list-circle ml-8">
                        <li v-for="(responsibility, index) in props.projectResponsibilities" :key="index" :class="index && 'mt-1'">
                            {{ responsibility }}
                            <p></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>