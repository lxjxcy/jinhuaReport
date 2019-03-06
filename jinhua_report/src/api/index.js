import { post } from '../axiosconfig/'
import { get } from '../axiosconfig/'
var url='http://101.71.143.135:8888';
export default {
	getRentMonth(params) {
		return get(url+'/report/rent/month', params)//租金收入月度趋势
	},
	getRentCompare(params) {
		return get(url+'/report/rent/compare', params)//租金收入比对
	},
	getRentArea(params) {
		return get(url+'/report/rent/area', params)//凭租面积
	},
	getRentYear(params) {
		return get(url+'/report/rent/year', params)//年度租金收入
	},
	getCompanyNumber(params) {
		return get(url+'/report/company/number', params)//驻进客户数量
	},
	getCompanyDetail(params) {
		return get(url+'/report/company/detail', params)//驻进企业
	},
	getCompanynInnovation(params) {
		return get(url+'/report/company/innovation', params)//企业创新
	},
	getCompanynmployeesNumn(params) {
		return get(url+'/report/company/employeesNum', params)//企业人数
	},
	getCompanynFinancing(params) {
		return get(url+'/report/company/financing', params)//企业融资
	},
	getCompanynManage(params) {
		return get(url+'/report/company/manage', params)//企业经营
	},
	getCompanyTopNume(params) {
		return get(url+'/report/company/topNum', params)//企业进驻数量占比top5
	},
	getopEmployeesNume(params) {
		return get(url+'/report/company/topEmployeesNum', params)//企业员工人数占比top5
	},
	getCompanyElectric(params) {
		return get(url+'/report/company/electric', params)//企业用电量
	},
	getCompanyQualification(params) {
		return get(url+'/report/company/qualification', params)//企业融资
	},
	getNationalProgram(params) {
		return get(url+'/report/company/nationalProgram', params)//国家计划项目
	},
	getCompanyHonor(params) {
		return get(url+'/report/company/honor', params)//国家计划项目
	},
	getArea(id) {
		return get(url+'/report/rent/area/'+id )//出租频率分析
	},
	getReaBuilding(id) {
		return get(url+'/report/rent/area/building/'+id )//出租概率
	},
	getBuilding(id) {
		return get(url+'/report/rent/building/'+id )//租金收入
	},
	getIntention(id) {
		return get(url+'/report/rent/area/intention/'+id )//招商需求分析
	},
	getAreaRoom(id) {
		return get(url+'/report/rent/area/room/'+id )//空置面积占比分析
	},
	getDayRoom(id) {
		return get(url+'/report/rent/day/room/'+id )//空置天数占比分析
	},
	getPolicyNeed(id) {
		return get(url+'/report/policy/need/'+id )//企业政策需求排行
	},
	getServiceNeed(id) {
		return get(url+'/report/service/need/'+id )//企业服务需求排行
	},
	
	getCommunitys(){
		return get(url+'/report/rent/getCommunitys')//园区列表
	},
	getParkCusomer(id){
		return get(url+'/report/company/number/'+id)//分园区进驻客户数量
		
		
	},
	getNumberByCommunity(){
		return get(url+'/report/company/numberByCommunity')//进驻客户数量地图
	},
	
	
	
	
	
	
	
	


	

	
	
}