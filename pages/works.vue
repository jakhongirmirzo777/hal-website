<template>
  <div>
    <WorksDiscover />
    <WorksSteps />
    <WorksStepOne />
    <HeroForm style="margin-bottom: 150px" />
  </div>
</template>

<script>
import WorksDiscover from '~/components/pages/WorksDiscover'
import WorksSteps from '~/components/pages/WorksSteps'
import WorksStepOne from '~/components/pages/WorksStepOne'
import HeroForm from '~/components/pages/HeroForm'
export default {
  name: 'WorksPage',
  components: { HeroForm, WorksStepOne, WorksSteps, WorksDiscover },
}
</script>
