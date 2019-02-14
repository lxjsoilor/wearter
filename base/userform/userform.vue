<template>
	<!--新增，修改  -->
				<Form :model="formItem" ref="formItem" :rules="ruleValidate" :label-width="102">
					<Form-item label="用户账号" prop="username">
						<Input v-model="formItem.username" placeholder="请输入账号"></Input>
					</Form-item>
					<Form-item label="用户密码" prop="password" :disabled="disabledInput" >
						<Input v-model="formItem.password" type="password" placeholder="请输入密码"></Input>
					</Form-item>
					<Form-item label="用户名称" prop="realname">
						<Input v-model="formItem.realname" placeholder="请输入名称"></Input>
					</Form-item>
					<Form-item label="联系方式" prop="mobile">
						<Input v-model="formItem.mobile" placeholder="请输入联系方式"></Input>
					</Form-item>
					<Form-item label="系统" prop="system_name">
						<Select v-model="formItem.system_name" style="width:260px">
							<Option v-for="item in rolenameLists" :value="item.system_name" :key="item.systemId">{{ item.system_name }}</Option>
		 				</Select>
					</Form-item>
					<Form-item label="用户角色" prop="role">
						<Select v-model="formItem.role" style="width:260px">
							<Option v-for="item in rolenameList" :value="item.rolename" :key="item.roleid">{{ item.rolename }}</Option>
						</Select>
					</Form-item>

					<Form-item label="部门名称(全称)" prop="department_fullname" style="width:300px">
						<Select :label='formItem.department_fullname' not-found-text='无匹配部门，请重新输入' v-model="formItem.department_fullname" filterable remote :remote-method="autoSearch" :loading="selectLoading" style="width:300px" @on-change='selecteds'>
							<Option v-for="(option, index) in autoCompleteData" :value="option.value" :key="index">{{option.label}}</Option>
						</Select>
					</Form-item>
					<Form-item label="部门名称(简称)" prop="department_name">
						<Input v-model="formItem.department_name" placeholder="请输入部门名称" style="width:300px"></Input>
					</Form-item>
					<FormItem label="部门编号" style="width:300px">
						<Input v-model="formItem.department_code" placeholder="请输入部门编号" style="width:300px"></Input>
					</FormItem>
				</Form>
</template>

<script>
	import { getUserList, getOgnList, updateUserList, updateUserPsw, getrolelist, getbumenlist } from 'api/usermanage'
	import { mapMutations } from 'vuex'
	import { successNotice, errorNotice } from 'common/js/dom'
	import { cloneObj, likeStrSearch } from 'common/js/util'
	import { userManagementRules } from 'common/js/rules'
	import { getDepList } from 'api/bumenlist'

	export default {

	  data () {
	    return {

	      disabledInput: false,
	      loading: false,
	      modal2: false,
	      depList: {},
	      autoCompleteData: [],
	      selectLoading: false,
	      modal_loading: false,
	      modal1: false,
	      btnChange: false,
	      btnSave: false,
	      updateTitle: '',
	      ruleValidate: userManagementRules,
	      formInline: {
	        username: '',
	        password: '',
	        realname: '',
	        mobile: '',
	        rolename: '',
	        department_name: ''
	      },
	      waterRecordPage: {
	        current: 1,
	        pageSize: 10,
	        total: 0
	      },
	      total: 0,
	      current: 1,
	      UserData: [],
	      rolenameList: [],
	      rolenameLists: [{
	        system_name: '南海区人民政府三防指挥系统',
	        systemId: '1000011'
	      },
	      {
	        system_name: '南海区三防综合业务管理系统',
	        systemId: '1000010'
	      },
	      {
	        system_name: '南海区三防指挥移动应用系统',
	        systemId: '1000020'
	      }
	      ],
	      departmentNameList: [],
	      bucunzai: '',
	      formItem: {},
	      theadArr: usermanageThead(this)
	    }
	  },

	  methods: {
	    selecteds (value) {
	      if (this.depList.length > 0) {
	        let index = this.depList.findIndex(item => value === item.department_fullname)
	        this.formItem.department_fullname = this.depList[index].department_fullname
	        this.formItem.department_name = this.depList[index].department_name
	        this.formItem.department_level = this.depList[index].department_level
	        this.formItem.department_code = this.depList[index].department_code
	      }
	    },
	    // 提示部门名称
	    autoSearch (query) {
	      if (query !== '') {
	        this.selectLoading = true
	        setTimeout(() => {
	          this.selectLoading = false
	          this.autoCompleteData = this.depList.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
	        }, 200)
	      } else {
	        this.autoCompleteData = []
	      }
	    },
	    // 获取部门
	    _getDepList () {
	      getDepList().then(res => {
	        this.depList = res.result.result.map(item => {
	          return {
	            value: item.fullname,
	            label: item.fullname,
	            department_name: item.name,
	            department_fullname: item.fullname,
	            department_code: item.code,
	            department_level: item.level
	          }
	        })
	      })
	    },
	    // 列表
	    _getUserList (page, search) {
	      this.loading = true
	      this.$Loading.start()
	      getUserList(page, search).then(res => {
	        if (res.code === ERR_OK) {
	          this.loading = false
	          this.$Loading.finish()
	          this.UserData = res.result.result
	          this.total = res.result.totalSize
	          this.current = res.result.page
	        }
	      })
	    },
	    // 用户角色下拉框
	    getRoleNameList (page, search) {
	      getrolelist(page, search).then(res => {
	        if (res.code === ERR_OK) {
	          this.rolenameList = res.result.result
	        }
	      })
	    },
	    // 用户部门下拉框
	    getDepartmentNameList (page, search) {
	      getbumenlist(page, search).then(res => {
	        if (res.code === ERR_OK) {
	          this.departmentNameList = res.result.result
	        }
	      })
	    }
	  },
	  mounted: function () {
	    this.getRoleNameList()
	    this.getDepartmentNameList()
	    this._getDepList()
	}
	}
</script>

<style lang="scss" scoped>
	.addBtn {
		background-color: #40b0ff;
		color: #fff;
		margin: 5px;
		height: 30px;
	}

	.usermanage {
		height: 100%
	}

	.title {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		background: rgb(237, 246, 250);
		height: 0.5rem;
		line-height: 0.5rem;
		padding-left: 10px;
		>span {
			font-size: 14px;
			font-weight: 600;
		}
	}

	#mar {
		margin-top: 42px;
	}
</style>
