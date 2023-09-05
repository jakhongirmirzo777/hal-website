<template>
  <div>
    <WorksDiscover />
    <WorksSteps />
  </div>
</template>

<script>
import WorksDiscover from '~/components/pages/WorksDiscover'
import WorksSteps from '~/components/pages/WorksSteps'
export default {
  name: 'WorksPage',
  components: { WorksSteps, WorksDiscover },
}
</script>
