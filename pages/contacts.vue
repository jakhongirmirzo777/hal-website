<template>
  <div>
    <ContactsHeader />
    <div class="contacts__form">
      <ReasonsForm />
    </div>
    <ContactsMap />
  </div>
</template>

<script>
import ContactsHeader from '~/components/pages/ContactsHeader'
import ReasonsForm from '~/components/pages/ReasonsForm'
import ContactsMap from '~/components/pages/ContactsMap'
export default {
  name: 'ContactsPage',
  components: { ContactsMap, ReasonsForm, ContactsHeader },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/pages/contacts.scss';
</style>
