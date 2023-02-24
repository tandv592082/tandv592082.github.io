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
    <div class="flex flex-col items-start w-full">
        <div class="flex justify-between w-full">
            <a v-if="props.companyLink" :href="props.companyLink"  class="font-semibold dark:text-white" target="_blank" rel="noopener">
                {{ props.companyName }}
            </a>
            <p v-else class="font-semibold">
                {{ props.companyName }}
            </p>
            <p class="font-semibold">{{ props.companyAddress }}</p>
        </div>
        <div class="flex justify-between w-full my-1">
            <p class="italic">{{ props.workPosition }}</p>
            <p v-if="props.workPeriod" class="italic">{{ props.workPeriod }}</p>
        </div>
        <div class="my-2" v-if="props.projectName">
            <p>
                <span class="font-semibold">
                    Project:
                </span>
                {{ props.projectName }}
            </p>
            <ul class="list-disc ml-8">
                <li>
                    <p>
                        <span class="font-semibold">
                            Description:
                        </span>
                        {{ props.projectDescription }}
                    </p>
                </li>
                <li>
                    <p>
                        <span class="font-semibold">
                            Technologies:
                        </span>
                        {{ props.projectTechnologies }}
                    </p>
                </li>
                <li>
                    <p class="font-semibold">Responsibilities:</p>
                    <ul class="list-circle ml-8">
                        <li v-for="responsibility in props.projectResponsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>