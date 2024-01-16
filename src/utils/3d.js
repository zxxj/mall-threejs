import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class use3D {
  constructor(id) {
    this.el = document.getElementById(id)
    this.scene
    this.camera
    this.renderer
    this.init()
  }

  init() {
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initControls()
    this.animate()
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.setEnvMap('000')
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 2000)
    this.camera.position.set(100, 100, 100)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true }) // 抗锯齿
    this.renderer.setPixelRatio(window.devicePixelRatio) // 设备
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping // 色调
    this.renderer.toneMappingExposure = 2 // 曝光度
    this.el.appendChild(this.renderer.domElement)
  }

  setEnvMap(hdr) {
    new RGBELoader().setPath('./files/hdr/').load(hdr + '.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping // 映射方式
      this.scene.background = texture // 场景背景
      this.scene.environment = texture // 场景环境贴图
    })
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    this.renderer.setAnimationLoop(this.render.bind(this))
  }

  initControls() {
    new OrbitControls(this.camera, this.renderer.domElement)
  }
}

export default use3D
