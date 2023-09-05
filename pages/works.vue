<template>
  <div>
    <WorksDiscover />
    <WorksSteps />
    <WorksStepOne />
  </div>
</template>

<script>
import WorksDiscover from '~/components/pages/WorksDiscover'
import WorksSteps from '~/components/pages/WorksSteps'
import WorksStepOne from '~/components/pages/WorksStepOne'
export default {
  name: 'WorksPage',
  components: { WorksStepOne, WorksSteps, WorksDiscover },
}
</script>
