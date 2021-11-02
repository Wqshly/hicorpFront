import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => Promise.resolve(require('@/view/Login'))

// 管理员页
const manageTemplate = () => Promise.resolve(require('@/components/PageTemplate/Template'))
const manageHome = () => Promise.resolve(require('@/view/Home'))

// 生产用人
const department = () => Promise.resolve(require('@/view/employment/Department'))
const workType = () => Promise.resolve(require('@/view/employment/WorkType'))
const internalStaff = () => Promise.resolve(require('@/view/employment/InternalStaff'))
const contractTeam = () => Promise.resolve(require('@/view/employment/ContractTeam'))
const externalStaff = () => Promise.resolve(require('@/view/employment/ExternalStaff'))

// 生产空间
const organizationSetup = () => Promise.resolve(require('@/view/production/OrganizationSetup'))
const plantMaintenance = () => Promise.resolve(require('@/view/production/PlantMaintenance'))
const workshop = () => Promise.resolve(require('@/view/production/Workshop'))
const productionLine = () => Promise.resolve(require('@/view/production/ProductionLine'))
const stationCategory = () => Promise.resolve(require('@/view/production/StationCategory'))
const station = () => Promise.resolve(require('@/view/production/Station'))
const warehouseCategory = () => Promise.resolve(require('@/view/production/WarehouseCategory'))
const warehouse = () => Promise.resolve(require('@/view/production/Warehouse'))
const warehouseLocationMaintenance = () => Promise.resolve(require('@/view/production/WarehouseLocationMaintenance'))
const steamCuringKiln = () => Promise.resolve(require('@/view/production/SteamCuringKiln'))
const waterPond = () => Promise.resolve(require('@/view/production/WaterPond'))
const sensorMaintenance = () => Promise.resolve(require('@/view/production/SensorMaintenance'))

// 生产用具
const vehicleAccount = () => Promise.resolve(require('@/view/tools/VehicleAccount'))
const vehiclePositioningManagement = () => Promise.resolve(require('@/view/tools/VehiclePositioningManagement'))
const moldCategory = () => Promise.resolve(require('@/view/tools/MoldCategory'))
const mould = () => Promise.resolve(require('@/view/tools/Mould'))
const toolCategory = () => Promise.resolve(require('@/view/tools/ToolCategory'))
const tool = () => Promise.resolve(require('@/view/tools/Tool'))

// 生产用料
const categoryOfPurchasedMaterials = () => Promise.resolve(require('@/view/materials/CategoryOfPurchasedMaterials'))
const steelProducts = () => Promise.resolve(require('@/view/materials/SteelProducts'))
const concreteRawMaterials = () => Promise.resolve(require('@/view/materials/ConcreteRawMaterials'))
const spareParts = () => Promise.resolve(require('@/view/materials/SpareParts'))
const auxiliaryMaterials = () => Promise.resolve(require('@/view/materials/AuxiliaryMaterials'))
const materialCodingRules = () => Promise.resolve(require('@/view/materials/MaterialCodingRules'))

// 设备管理
const equipmentCategory = () => Promise.resolve(require('@/view/device/EquipmentCategory'))
const equipment = () => Promise.resolve(require('@/view/device/Equipment'))
const deviceIOMaintenance = () => Promise.resolve(require('@/view/device/DeviceIOMaintenance'))
const deviceSpotCheck = () => Promise.resolve(require('@/view/device/DeviceSpotCheck'))
const deviceUpKeep = () => Promise.resolve(require('@/view/device/DeviceUpKeep'))
const deviceRepair = () => Promise.resolve(require('@/view/device/DeviceRepair'))
const deviceMaintenance = () => Promise.resolve(require('@/view/device/DeviceMaintenance'))
const deviceMonitoring = () => Promise.resolve(require('@/view/device/DeviceMonitoring'))
const vehicleCategory = () => Promise.resolve(require('@/view/device/VehicleCategory'))

// 生产技术
const homemadeCategory = () => Promise.resolve(require('@/view/technology/HomemadeCategory'))
const selfMadeCode = () => Promise.resolve(require('@/view/technology/SelfMadeCode'))
const processCategory = () => Promise.resolve(require('@/view/technology/ProcessCategory'))
const processMaintenance = () => Promise.resolve(require('@/view/technology/ProcessMaintenance'))
const qualityInspectionDefine = () => Promise.resolve(require('@/view/technology/QualityInspectionDefine'))
const processPlanMaintenance = () => Promise.resolve(require('@/view/technology/ProcessPlanMaintenance'))
const productionConsumablesBOM = () => Promise.resolve(require('@/view/technology/ProductionConsumablesBOM'))
const productionProcessBOM = () => Promise.resolve(require('@/view/technology/ProductionProcessBOM'))
const docUploadManage = () => Promise.resolve(require('@/view/technology/DocUploadManage'))
const qrCodeDisclosure = () => Promise.resolve(require('@/view/technology/QRCodeDisclosure'))

// 销售管理
const customerMaintenance = () => Promise.resolve(require('@/view/sales/CustomerMaintenance'))
const contractMaintenance = () => Promise.resolve(require('@/view/sales/ContractMaintenance'))
const orderMaintenance = () => Promise.resolve(require('@/view/sales/OrderMaintenance'))
const customerOverview = () => Promise.resolve(require('@/view/sales/CustomerOverview'))
const contractExecution = () => Promise.resolve(require('@/view/sales/ContractExecution'))
const orderTraceWatchBoard = () => Promise.resolve(require('@/view/sales/OrderTraceWatchBoard'))

// 生产计划管理
const complementaryRingOrder = () => Promise.resolve(require('@/view/plans/ComplementaryRingOrder'))
const patchOrderPlan = () => Promise.resolve(require('@/view/plans/PatchOrderPlan'))
const mrpExpansion = () => Promise.resolve(require('@/view/plans/MRPExpansion'))
const ringCodeAuto = () => Promise.resolve(require('@/view/plans/RingCodeAuto'))
const patchCodeAuto = () => Promise.resolve(require('@/view/plans/PatchCodeAuto'))
const pendingPatchData = () => Promise.resolve(require('@/view/plans/PendingPatchData'))
const reinforcementCage = () => Promise.resolve(require('@/view/plans/ReinforcementCage'))
const pouringPlan = () => Promise.resolve(require('@/view/plans/PouringPlan'))

// 生产过程控制
const startWorkSetting = () => Promise.resolve(require('@/view/process/StartWorkSetting'))
const jobManageTemplate = () => Promise.resolve(require('@/view/process/JobManageTemplate'))
const confirmJobManage = () => Promise.resolve(require('@/view/process/ConfirmJobManage'))
const checkIn = () => Promise.resolve(require('@/view/process/CheckIn'))
const rfidIO = () => Promise.resolve(require('@/view/process/RFIDIO'))
const reinforcementCageCompletionAdjustment = () => Promise.resolve(require('@/view/process/ReinforcementCageCompletionAdjustment'))
const concretePouringNumberConfirmation = () => Promise.resolve(require('@/view/process/ConcretePouringNumberConfirmation'))
const castingComplete = () => Promise.resolve(require('@/view/process/CastingComplete'))
const putinSteaming = () => Promise.resolve(require('@/view/process/PutinSteaming'))
const putoutSteaming = () => Promise.resolve(require('@/view/process/PutoutSteaming'))
const membersWereDeMould = () => Promise.resolve(require('@/view/process/MembersWereDeMould'))
const buildingBlockInfo = () => Promise.resolve(require('@/view/process/BuildingBlockInfo'))
const putinPools = () => Promise.resolve(require('@/view/process/PutinPools'))
const putoutPools = () => Promise.resolve(require('@/view/process/PutoutPools'))
const putinYard = () => Promise.resolve(require('@/view/process/PutinYard'))
const loadShipments = () => Promise.resolve(require('@/view/process/LoadShipments'))
const assemblyLineTracking = () => Promise.resolve(require('@/view/process/AssemblyLineTracking'))
const appTracking = () => Promise.resolve(require('@/view/process/AppTracking'))
const waterPoolMonitoring = () => Promise.resolve(require('@/view/process/WaterPoolMonitoring'))
const yardMonitoring = () => Promise.resolve(require('@/view/process/YardMonitoring'))
const completionForm = () => Promise.resolve(require('@/view/process/CompletionForm'))

// 采购管理
const supplier = () => Promise.resolve(require('@/view/purchasing/Supplier'))
const evaluationCriterion = () => Promise.resolve(require('@/view/purchasing/EvaluationCriterion'))
const rating = () => Promise.resolve(require('@/view/purchasing/Rating'))
const po = () => Promise.resolve(require('@/view/purchasing/PO'))
const orders = () => Promise.resolve(require('@/view/purchasing/Orders'))
const arrivalOrder = () => Promise.resolve(require('@/view/purchasing/ArrivalOrder'))
const priceList = () => Promise.resolve(require('@/view/purchasing/PriceList'))
const exceptionRecord = () => Promise.resolve(require('@/view/purchasing/ExceptionRecord'))

// 库存管理
const safetyStockManage = () => Promise.resolve(require('@/view/inventory/SafetyStockManage'))
const numberSetting = () => Promise.resolve(require('@/view/inventory/NumberSetting'))
const purchased = () => Promise.resolve(require('@/view/inventory/Purchased'))
const purchasedList = () => Promise.resolve(require('@/view/inventory/PurchasedList'))
const blockbusterRawMaterial = () => Promise.resolve(require('@/view/inventory/BlockbusterRawMaterial'))
const steelBarInventory = () => Promise.resolve(require('@/view/inventory/SteelBarInventory'))
const rawForearm = () => Promise.resolve(require('@/view/inventory/RawForearm'))
const mixingStationData = () => Promise.resolve(require('@/view/inventory/MixingStationData'))
const earlyWarning = () => Promise.resolve(require('@/view/inventory/EarlyWarning'))
const checkOffPrices = () => Promise.resolve(require('@/view/inventory/CheckOffPrices'))
const cost = () => Promise.resolve(require('@/view/inventory/Cost'))
const visualYard = () => Promise.resolve(require('@/view/inventory/VisualYard'))
const deliver = () => Promise.resolve(require('@/view/inventory/Deliver'))
const finishedInvertedLibrary = () => Promise.resolve(require('@/view/inventory/FinishedInvertedLibrary'))
const shippingPlan = () => Promise.resolve(require('@/view/inventory/ShippingPlan'))
const entryStorage = () => Promise.resolve(require('@/view/inventory/EntryStorage'))

// 质量管理
const qcCriteriaCategory = () => Promise.resolve(require('@/view/quality/QCCriteriaCategory'))
const qcMaintenance = () => Promise.resolve(require('@/view/quality/QCMaintenance'))
const qcCategory = () => Promise.resolve(require('@/view/quality/QCCategory'))
const qcProject = () => Promise.resolve(require('@/view/quality/QCProject'))
const qcProtocol = () => Promise.resolve(require('@/view/quality/QCProtocol'))
const rawMaterialsExam = () => Promise.resolve(require('@/view/quality/RawMaterialsExam'))
const procedureQualityExam = () => Promise.resolve(require('@/view/quality/ProcedureQualityExam'))
const loopNumberControl = () => Promise.resolve(require('@/view/quality/LoopNumberControl'))
const autoCycling = () => Promise.resolve(require('@/view/quality/AutoCycling'))
const endOfLife = () => Promise.resolve(require('@/view/quality/EndOfLife'))
const pouringData = () => Promise.resolve(require('@/view/quality/PouringData'))
const vibrationData = () => Promise.resolve(require('@/view/quality/VibrationData'))
const acquisitionSteamCuring = () => Promise.resolve(require('@/view/quality/AcquisitionSteamCuring'))
const waterConservationData = () => Promise.resolve(require('@/view/quality/WaterConservationData'))
const unqualifiedHandling = () => Promise.resolve(require('@/view/quality/UnqualifiedHandling'))
const concreteFitRatioManage = () => Promise.resolve(require('@/view/quality/ConcreteFitRatioManage'))
const qcReportManage = () => Promise.resolve(require('@/view/quality/QCReportManage'))
const retrospectively = () => Promise.resolve(require('@/view/quality/Retrospectively'))

// 展示页面
const basic = () => Promise.resolve(require('@/view/core/Basic'))
const center = () => Promise.resolve(require('@/view/core/Center'))
const prodLine = () => Promise.resolve(require('@/view/core/ProdLine'))
const reinforcementCageTest = () => Promise.resolve(require('@/view/core/ReinforcementCage'))

// 权限管理
const role = () => Promise.resolve(require('@/view/permission/Role'))
const userRoleRelation = () => Promise.resolve(require('@/view/permission/UserRoleRelation'))

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: manageTemplate,
      meta: {
        schoolAdmin: true
      },
      children: [
        {
          path: '/home',
          component: manageHome,
          meta: {
            title: '首页'
          }
        },

        // 部门
        {
          path: '/employment/department',
          component: department,
          meta: {
            title: '部门管理'
          }
        },
        {
          path: '/employment/work-type',
          component: workType,
          meta: {
            title: '工种管理'
          }
        },
        {
          path: '/employment/internal-staff',
          component: internalStaff,
          meta: {
            title: '内部员工管理'
          }
        },
        {
          path: '/employment/contract-team',
          component: contractTeam,
          meta: {
            title: '承包队管理'
          }
        },
        {
          path: '/employment/external-staff',
          component: externalStaff,
          meta: {
            title: '外部员工管理'
          }
        },

        // 生产空间
        {
          path: '/production/organization-setup',
          component: organizationSetup,
          meta: {
            title: '组织设置'
          }
        },
        {
          path: '/production/plant-maintenance',
          component: plantMaintenance,
          meta: {
            title: '工厂维护'
          }
        },
        {
          path: '/production/workshop',
          component: workshop,
          meta: {
            title: '车间'
          }
        },
        {
          path: '/production/production-line',
          component: productionLine,
          meta: {
            title: '生产线'
          }
        },
        {
          path: '/production/station-category',
          component: stationCategory,
          meta: {
            title: '工位类别'
          }
        },
        {
          path: '/production/station',
          component: station,
          meta: {
            title: '工位'
          }
        },
        {
          path: '/production/warehouse-category',
          component: warehouseCategory,
          meta: {
            title: '仓库类别'
          }
        },
        {
          path: '/production/warehouse',
          component: warehouse,
          meta: {
            title: '仓库'
          }
        },
        {
          path: '/production/warehouse-location-maintenance',
          component: warehouseLocationMaintenance,
          meta: {
            title: '仓库库位维护'
          }
        },
        {
          path: '/production/steam-curing-kiln',
          component: steamCuringKiln,
          meta: {
            title: '蒸养窑'
          }
        },
        {
          path: '/production/water-pond',
          component: waterPond,
          meta: {
            title: '水养池'
          }
        },
        {
          path: '/production/sensor-maintenance',
          component: sensorMaintenance,
          meta: {
            title: '传感器维护'
          }
        },

        // 生产用具
        {
          path: '/tools/vehicle-account',
          component: vehicleAccount,
          meta: {
            title: '车辆台账'
          }
        },
        {
          path: '/tools/vehicle-positioning-management',
          component: vehiclePositioningManagement,
          meta: {
            title: '车辆定位管理'
          }
        },
        {
          path: '/tools/mold-category',
          component: moldCategory,
          meta: {
            title: '模具类别'
          }
        },
        {
          path: '/tools/mould',
          component: mould,
          meta: {
            title: '模具'
          }
        },
        {
          path: '/tools/tool-category',
          component: toolCategory,
          meta: {
            title: '工具类别'
          }
        },
        {
          path: '/tools/tool',
          component: tool,
          meta: {
            title: '工具'
          }
        },

        // 生产用料
        {
          path: '/materials/category-of-purchased-materials',
          component: categoryOfPurchasedMaterials,
          meta: {
            title: '外购物料类别'
          }
        },
        {
          path: '/materials/steel-products',
          component: steelProducts,
          meta: {
            title: '钢材'
          }
        },
        {
          path: '/materials/concrete-raw-materials',
          component: concreteRawMaterials,
          meta: {
            title: '混凝土原材料'
          }
        },
        {
          path: '/materials/spare-parts',
          component: spareParts,
          meta: {
            title: '零配件'
          }
        },
        {
          path: '/materials/auxiliary-materials',
          component: auxiliaryMaterials,
          meta: {
            title: '辅料辅材'
          }
        },
        {
          path: '/materials/material-coding-rules',
          component: materialCodingRules,
          meta: {
            title: '物料编码规则'
          }
        },

        // 设备管理
        {
          path: '/device/equipment-category',
          component: equipmentCategory,
          meta: {
            title: '设备类别'
          }
        },
        {
          path: '/device/equipment',
          component: equipment,
          meta: {
            title: '设备'
          }
        },
        {
          path: '/device/device-io-maintenance',
          component: deviceIOMaintenance,
          meta: {
            title: '设备读写接口维护'
          }
        },
        {
          path: '/device/device-spot-check',
          component: deviceSpotCheck,
          meta: {
            title: '设备点检'
          }
        },
        {
          path: '/device/device-up-keep',
          component: deviceUpKeep,
          meta: {
            title: '设备保养'
          }
        },
        {
          path: '/device/device-repair',
          component: deviceRepair,
          meta: {
            title: '设备报修'
          }
        },
        {
          path: '/device/device-maintenance',
          component: deviceMaintenance,
          meta: {
            title: '设备维修'
          }
        },
        {
          path: '/device/device-monitoring',
          component: deviceMonitoring,
          meta: {
            title: '设备运行状态物联网采集监控'
          }
        },
        {
          path: '/device/vehicle-category',
          component: vehicleCategory,
          meta: {
            title: '车辆类别'
          }
        },

        // 生产技术

        {
          path: '/technology/homemade-category',
          component: homemadeCategory,
          meta: {
            title: '自制件类别'
          }
        },
        {
          path: '/technology/self-made-code',
          component: selfMadeCode,
          meta: {
            title: '自制件编码维护'
          }
        },
        {
          path: '/technology/process-category',
          component: processCategory,
          meta: {
            title: '工序类别'
          }
        },
        {
          path: '/technology/process-maintenance',
          component: processMaintenance,
          meta: {
            title: '工序维护'
          }
        },
        {
          path: '/technology/quality-inspection-define',
          component: qualityInspectionDefine,
          meta: {
            title: '工序质检方案定义'
          }
        },
        {
          path: '/technology/process-plan-maintenance',
          component: processPlanMaintenance,
          meta: {
            title: '工艺方案维护'
          }
        },
        {
          path: '/technology/production-consumables-bom',
          component: productionConsumablesBOM,
          meta: {
            title: '生产耗材BOM'
          }
        },
        {
          path: '/technology/production-process-bom',
          component: productionProcessBOM,
          meta: {
            title: '生产工艺BOM'
          }
        },
        {
          path: '/technology/doc-upload-manage',
          component: docUploadManage,
          meta: {
            title: '技术文档上传管理'
          }
        },
        {
          path: '/technology/qr-code-disclosure',
          component: qrCodeDisclosure,
          meta: {
            title: '二维码技术交底'
          }
        },

        // 销售管理
        {
          path: '/sales/customer-maintenance',
          component: customerMaintenance,
          meta: {
            title: '客户维护'
          }
        },
        {
          path: '/sales/contract-maintenance',
          component: contractMaintenance,
          meta: {
            title: '合同维护'
          }
        },
        {
          path: '/sales/order-maintenance',
          component: orderMaintenance,
          meta: {
            title: '订单维护'
          }
        },
        {
          path: '/sales/customer-overview',
          component: customerOverview,
          meta: {
            title: '客户总览看板'
          }
        },
        {
          path: '/sales/contract-execution',
          component: contractExecution,
          meta: {
            title: '合同执行看板'
          }
        },
        {
          path: '/sales/order-trace-watch-board',
          component: orderTraceWatchBoard,
          meta: {
            title: '订单跟踪看板'
          }
        },

        // 生产计划管理
        {
          path: '/plans/complementary-ring-order',
          component: complementaryRingOrder,
          meta: {
            title: '补环订单编制'
          }
        },
        {
          path: '/plans/patch-order-plan',
          component: patchOrderPlan,
          meta: {
            title: '补片生产计划编制'
          }
        },
        {
          path: '/plans/mrp-expansion',
          component: mrpExpansion,
          meta: {
            title: '订单生产任务MRP展开'
          }
        },
        {
          path: '/plans/ring-code-auto',
          component: ringCodeAuto,
          meta: {
            title: '环号自动生成'
          }
        },
        {
          path: '/plans/patch-code-auto',
          component: patchCodeAuto,
          meta: {
            title: '管片批号自动生成'
          }
        },
        {
          path: '/plans/pending-patch-data',
          component: pendingPatchData,
          meta: {
            title: '待生产管片明细数据生成查询维护'
          }
        },
        {
          path: '/plans/reinforcement-cage',
          component: reinforcementCage,
          meta: {
            title: '钢筋笼班次执行计划编制'
          }
        },
        {
          path: '/plans/pouring-plan',
          component: pouringPlan,
          meta: {
            title: '管片浇筑班次执行计划编制'
          }
        },

        // 生产过程控制
        {
          path: '/process/start-work-setting',
          component: startWorkSetting,
          meta: {
            title: '生产班次开工设定'
          }
        },
        {
          path: '/process/job-manage-template',
          component: jobManageTemplate,
          meta: {
            title: '班次工位工作安排模板维护'
          }
        },
        {
          path: '/process/confirm-job-manage',
          component: confirmJobManage,
          meta: {
            title: '班次工位工作安排确认'
          }
        },
        {
          path: '/process/check-in',
          component: checkIn,
          meta: {
            title: '工人扫码签到'
          }
        },
        {
          path: '/process/rfid-io',
          component: rfidIO,
          meta: {
            title: '管片模具rfid标签读写'
          }
        },
        {
          path: '/process/reinforcement-cage-completion-adjustment',
          component: reinforcementCageCompletionAdjustment,
          meta: {
            title: '钢筋笼完工调整审核确认'
          }
        },
        {
          path: '/process/concrete-pouring-number-confirmation',
          component: concretePouringNumberConfirmation,
          meta: {
            title: '混凝土浇筑关联管片批号确认'
          }
        },
        {
          path: '/process/casting-complete',
          component: castingComplete,
          meta: {
            title: '浇筑完工调整审核确认'
          }
        },
        {
          path: '/process/putin-steaming',
          component: putinSteaming,
          meta: {
            title: '管片进入蒸养窑调整审核确认'
          }
        },
        {
          path: '/process/putout-steaming',
          component: putoutSteaming,
          meta: {
            title: '管片出蒸养窑调整审核确认'
          }
        },
        {
          path: '/process/members-were-de-mould',
          component: membersWereDeMould,
          meta: {
            title: '构件脱模调整审核确认'
          }
        },
        {
          path: '/process/building-block-info',
          component: buildingBlockInfo,
          meta: {
            title: '构件信息修改审核确认打码'
          }
        },
        {
          path: '/process/putin-pools',
          component: putinPools,
          meta: {
            title: '管片进入水养池调整审核确认'
          }
        },
        {
          path: '/process/putout-pools',
          component: putoutPools,
          meta: {
            title: '管片出水养池调整审核确认'
          }
        },
        {
          path: '/process/putin-yard',
          component: putinYard,
          meta: {
            title: '管片扫码入堆场'
          }
        },
        {
          path: '/process/load-shipments',
          component: loadShipments,
          meta: {
            title: '管片扫码装车发货'
          }
        },
        {
          path: '/process/assembly-line-tracking',
          component: assemblyLineTracking,
          meta: {
            title: '流水线自动动态跟踪'
          }
        },
        {
          path: '/process/app-tracking',
          component: appTracking,
          meta: {
            title: '移动端手动查询跟踪'
          }
        },
        {
          path: '/process/water-pool-monitoring',
          component: waterPoolMonitoring,
          meta: {
            title: '水样池三维可视化大屏监控'
          }
        },
        {
          path: '/process/yard-monitoring',
          component: yardMonitoring,
          meta: {
            title: '堆场三维可视化大屏监控'
          }
        },
        {
          path: '/process/completion-form',
          component: completionForm,
          meta: {
            title: '班次完工交接汇总表编制'
          }
        },

        // 采购管理
        {
          path: '/purchasing/supplier',
          component: supplier,
          meta: {
            title: '供应商维护'
          }
        },
        {
          path: '/purchasing/evaluation-criterion',
          component: evaluationCriterion,
          meta: {
            title: '供应评价标准'
          }
        },
        {
          path: '/purchasing/rating',
          component: rating,
          meta: {
            title: '供应商等级评定'
          }
        },
        {
          path: '/purchasing/po',
          component: po,
          meta: {
            title: '采购申请单'
          }
        },
        {
          path: '/purchasing/orders',
          component: orders,
          meta: {
            title: '采购订单'
          }
        },
        {
          path: '/purchasing/arrival-order',
          component: arrivalOrder,
          meta: {
            title: '采购到货单'
          }
        },
        {
          path: '/purchasing/price-list',
          component: priceList,
          meta: {
            title: '采购比价单'
          }
        },
        {
          path: '/purchasing/exception-record',
          component: exceptionRecord,
          meta: {
            title: '采购订单异常记录单'
          }
        },

        // 库存管理
        {
          path: '/inventory/safety-stock-manage',
          component: safetyStockManage,
          meta: {
            title: '安全库存管理设定'
          }
        },
        {
          path: '/inventory/number-setting',
          component: numberSetting,
          meta: {
            title: '入库原料批号设定暨二维码打印'
          }
        },
        {
          path: '/inventory/purchased',
          component: purchased,
          meta: {
            title: '外购物料扫码入库'
          }
        },
        {
          path: '/inventory/purchased-list',
          component: purchasedList,
          meta: {
            title: '外购物料入库单维护打印'
          }
        },
        {
          path: '/inventory/blockbuster-raw-material',
          component: blockbusterRawMaterial,
          meta: {
            title: '过磅原料自动采集入库'
          }
        },
        {
          path: '/inventory/steel-bar-inventory',
          component: steelBarInventory,
          meta: {
            title: '钢筋点数入库'
          }
        },
        {
          path: '/inventory/raw-forearm',
          component: rawForearm,
          meta: {
            title: '原料领料出库'
          }
        },
        {
          path: '/inventory/mixing-station-data',
          component: mixingStationData,
          meta: {
            title: '搅拌站原料消耗数据自动对接出库'
          }
        },
        {
          path: '/inventory/early-warning',
          component: earlyWarning,
          meta: {
            title: '原料库存预警'
          }
        },
        {
          path: '/inventory/check-off-prices',
          component: checkOffPrices,
          meta: {
            title: '原料核价'
          }
        },
        {
          path: '/inventory/cost',
          component: cost,
          meta: {
            title: '工程原料成本'
          }
        },
        {
          path: '/inventory/visual-yard',
          component: visualYard,
          meta: {
            title: '可视堆场'
          }
        },
        {
          path: '/inventory/deliver',
          component: deliver,
          meta: {
            title: '成品发货'
          }
        },
        {
          path: '/inventory/finished-inverted-library',
          component: finishedInvertedLibrary,
          meta: {
            title: '成品倒库'
          }
        },
        {
          path: '/inventory/shipping-plan',
          component: shippingPlan,
          meta: {
            title: '发货计划编制'
          }
        },
        {
          path: '/inventory/entry-storage',
          component: entryStorage,
          meta: {
            title: '成品扫码入库'
          }
        },

        // 质量管理
        {
          path: '/quality/qc-criteria-category',
          component: qcCriteriaCategory,
          meta: {
            title: '质检标准类别'
          }
        },
        {
          path: '/quality/qc-maintenance',
          component: qcMaintenance,
          meta: {
            title: '质检标准维护'
          }
        },
        {
          path: '/quality/qc-category',
          component: qcCategory,
          meta: {
            title: '质检类别'
          }
        },
        {
          path: '/quality/qc-project',
          component: qcProject,
          meta: {
            title: '质检项目维护'
          }
        },
        {
          path: '/quality/qc-protocol',
          component: qcProtocol,
          meta: {
            title: '质检方案维护'
          }
        },
        {
          path: '/quality/raw-materials-exam',
          component: rawMaterialsExam,
          meta: {
            title: '原料检验'
          }
        },
        {
          path: '/quality/procedure-quality-exam',
          component: procedureQualityExam,
          meta: {
            title: '工序质量检验'
          }
        },
        {
          path: '/quality/loop-number-control',
          component: loopNumberControl,
          meta: {
            title: '环号控制'
          }
        },
        {
          path: '/quality/auto-cycling',
          component: autoCycling,
          meta: {
            title: '自动配环'
          }
        },
        {
          path: '/quality/end-of-life',
          component: endOfLife,
          meta: {
            title: '构件报废'
          }
        },
        {
          path: '/quality/pouring-data',
          component: pouringData,
          meta: {
            title: '浇筑数据自动采集'
          }
        },
        {
          path: '/quality/vibration-data',
          component: vibrationData,
          meta: {
            title: '振捣数据自动采集'
          }
        },
        {
          path: '/quality/acquisition-steam-curing',
          component: acquisitionSteamCuring,
          meta: {
            title: '蒸汽养护数据自动采集'
          }
        },
        {
          path: '/quality/water-conservation-data',
          component: waterConservationData,
          meta: {
            title: '水养数据自动采集'
          }
        },
        // 审批管理
        {
          path: '/quality/unqualified-handling',
          component: unqualifiedHandling,
          meta: {
            title: '不合格品处理'
          }
        },
        {
          path: '/quality/concrete-fit-ratio-manage',
          component: concreteFitRatioManage,
          meta: {
            title: '混凝土配合比管理'
          }
        },
        {
          path: '/quality/qc-report-manage',
          component: qcReportManage,
          meta: {
            title: '质检报告管理'
          }
        },
        {
          path: '/quality/retrospectively',
          component: retrospectively,
          meta: {
            title: '质量追溯'
          }
        },

        // 展示用的图表
        {
          path: '/core/basic',
          component: basic,
          meta: {
            title: '基础图表'
          }
        },
        {
          path: '/core/center',
          component: center,
          meta: {
            title: '中控图表'
          }
        },
        {
          path: '/core/prod-line',
          component: prodLine,
          meta: {
            title: '产线图表'
          }
        },
        {
          path: '/core/reinforcement-cage',
          component: reinforcementCageTest,
          meta: {
            title: '钢筋笼图表'
          }
        },

        // 权限管理模块
        {
          path: '/permission/role',
          component: role,
          meta: {
            title: '角色管理'
          }
        },
        {
          path: '/permission/user-role',
          component: userRoleRelation,
          meta: {
            title: '用户角色分配'
          }
        }
      ]
    }
  ]
})
