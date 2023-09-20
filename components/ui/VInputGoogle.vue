<template>
  <VInput
    :id="id"
    :vid="vid"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :rules="rules"
    :hide-details="hideDetails"
    :icon="icon"
    :icon-size="iconSize"
    :value="value"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
import VInput from '~/components/ui/VInput'
export default {
  name: 'VInputGoogle',
  components: { VInput },
  props: {
    id: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '22',
    },
    value: {
      type: [String, Object],
      default: '',
    },
  },
  mounted() {
    this.initGoogleMaps()
  },
  methods: {
    initGoogleMaps() {
      const element = document.getElementById(this.id)
      const options = {
        types: ['(regions)'],
        componentRestrictions: { country: 'US' },
        fields: ['address_components', 'geometry'],
      }
      const autocomplete = new window.google.maps.places.Autocomplete(
        element,
        options
      )

      autocomplete.addListener(
        'place_changed',
        this.onChangeInput.bind(null, autocomplete)
      )
    },
    onChangeInput(input) {
      const place = input.getPlace()
      let state = ''
      let city = ''
      let zip = ''
      for (const component of place.address_components) {
        const componentType = component.types[0]
        switch (componentType) {
          case 'administrative_area_level_1': {
            state = component.short_name
            break
          }
          case 'locality':
            city = component.long_name
            break
        }
      }
      const geocoder = new window.google.maps.Geocoder()
      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK') {
          for (const component of results[0].address_components) {
            const componentType = component.types[0]
            if (componentType === 'postal_code') {
              zip = component.long_name
              break
            }
          }
          this.$emit('input', `${city} ${state} ${zip}`.trim())
          this.$emit('get-address', {
            city,
            state,
            zip,
          })
        } else {
          console.error('Geocoding failed:', status)
        }
      })
    },
  },
}
</script>
