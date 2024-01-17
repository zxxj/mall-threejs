import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

class use3D {
  constructor(id) {
    this.el = document.getElementById(id)
    this.scene
    this.camera
    this.renderer
    this.model
    this.bottom // 模型底座
    this.animateAction
    this.mixer
    this.spotLight1
    this.spotLight2
    this.spotLight3
    this.spotLight4
    this.clock = new THREE.Clock()
    this.init()
  }

  init() {
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.addMesh()
    this.initControls()
    this.animate()
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.setEnvMap('000')
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 2000)
    this.camera.position.set(4, 0, 5)
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

  setModel(modelName) {
    const loader = new GLTFLoader().setPath('./files/gltf/')
    loader.load(modelName, (gltf) => {
      this.model = gltf.scene.children[0]
      this.bottom = gltf.scene.children[2]
      this.scene.add(this.model)
      this.scene.add(this.bottom)

      // this.scene.add(gltf.scene)

      // 修改摄像头为模型摄像头
      // this.camera = gltf.cameras[0]

      // // 模型动画
      // this.mixer = new THREE.AnimationMixer(this.camera)
      // this.animateAction = this.mixer.clipAction(gltf.animations[0])
      // // 设置动画播放时长
      // this.animateAction.setDuration(20).setLoop(THREE.LoopOnce)
      // this.animateAction.clampWhenFinished = true
      // this.animateAction.play()

      // // 设置灯光
      // this.spotLight1 = gltf.scene.children[2].children[0]
      // this.spotLight1.intensity = 1
      // this.spotLight2 = gltf.scene.children[3].children[0]
      // this.spotLight2.intensity = 1
      // this.spotLight3 = gltf.scene.children[4].children[0]
      // this.spotLight3.intensity = 1
    })
  }

  addMesh(modelName) {
    this.setModel(modelName || 'bag2.glb')
  }

  render() {
    var delta = this.clock.getDelta()
    this.mixer && this.mixer.update(delta)
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    this.renderer.setAnimationLoop(this.render.bind(this))
    this.resize()
  }

  initControls() {
    new OrbitControls(this.camera, this.renderer.domElement)
  }

  resize() {
    window.onresize = () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    }
  }
}

export default use3D
