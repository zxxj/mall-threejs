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
    this.init()
  }

  init() {
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initControls()
    this.animate()
    this.addMesh()
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
    })
  }

  addMesh() {
    this.setModel('bag2.glb')
  }

  render() {
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
