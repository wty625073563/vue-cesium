<template>
  <button @click="toggleUseProjection" class="baseLegend locationBar" type="button">
    <template v-if="!mouseCoords.useProjection">
      <div class="section">
        <span>经度</span>
        <span>{{ mouseCoords.longitude }}</span>
      </div>
      <div class="section">
        <span>纬度</span>
        <span>{{ mouseCoords.latitude }}</span>
      </div>
    </template>
    <template v-else>
      <div class="section-short">
        <span>带号</span>
        <span>{{ mouseCoords.utmZone }}</span>
      </div>
      <div class="section">
        <span>X</span>
        <span>{{ mouseCoords.east }}</span>
      </div>
      <div class="section">
        <span>Y</span>
        <span>{{ mouseCoords.north }}</span>
      </div>
    </template>
    <div class="section-long">
      <span>高程</span>
      <span>{{ mouseCoords.elevation }}</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'vc-bar-location',
  props: {
    showUtmZone: {
      type: Boolean,
      default: true
    },
    mouseCoords: Object
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.lastMouseX = -1
      this.lastMouseY = -1
      this.viewer._element.addEventListener('mousemove', this.onMouseMove, false)
      this.viewer._element.addEventListener('touchmove', this.onMouseMove, false)
    })
  },
  methods: {
    toggleUseProjection () {
      this.mouseCoords.toggleUseProjection()
    },
    onMouseMove (event) {
      const { Cartesian2 } = Cesium

      let clientX = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX
      let clientY = event.type === 'mousemove' ? event.clientY : event.changedTouches[0].clientY
      if (clientX === this.lastMouseX && clientY === this.lastMouseY) {
        return
      }

      this.lastMouseX = clientX
      this.lastMouseY = clientY

      if (this.viewer) {
        const rect = this.viewer._element.getBoundingClientRect()
        const position = new Cartesian2(clientX - rect.left, clientY - rect.top)
        this.mouseCoords.updateCoordinatesFromCesium(this.viewer, position)
      }
    }
  },
  destroyed () {
    this.viewer._element.removeEventListener('mousemove', this.onMouseMove, false)
    this.viewer._element.removeEventListener('touchmove', this.onMouseMove, false)
  }
}
</script>