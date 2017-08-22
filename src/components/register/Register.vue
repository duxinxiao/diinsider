<template>
  <div class="registry">
    <el-steps class="steps" :space="300" :active="step" :center="true" :align-center="true">
      <el-step :title="$t('registerForm.basic')" icon="document"></el-step>
      <el-step :title="$t('registerForm.choose')" icon="edit"></el-step>
      <el-step :title="$t('registerForm.accreditation')" icon="upload"></el-step>
    </el-steps>
    <el-form :model="formSimple" :rules="rules1" v-if="step === 1" ref="formSimple" label-width="150px" class="form">
      <el-form-item :label="$t('registerForm.email')" prop="email">
        <el-input v-model="formSimple.email" :placeholder="$t('registerForm.emailMsg')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('registerForm.password')" prop="password">
        <el-input v-model="formSimple.password" type="password" :placeholder="$t('registerForm.passwordMsg')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('registerForm.confirm')" prop="passwordConfirm">
        <el-input v-model="formSimple.passwordConfirm" type="password" :placeholder="$t('registerForm.confirmMsg')"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" class="button" @click="next('formSimple')">{{ $t('registerForm.next') }}</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="formSimple" :rules="rules2" v-if="step === 2" ref="formSimple" class="form2">
      <el-form-item prop="type">
        <el-radio-group v-model="formSimple.type" style="display: block;">
          <el-radio class="role" :label='1'>
            <img class="roleImg" src="/static/individual.png"></img>
            <div class="roleDes">{{ $t( 'registerForm.individual') }}</div>
          </el-radio>
          <el-radio class="role" :label='3'>
            <img class="roleImg" src="/static/maker.png"></img>
            <div class="roleDes">{{ $t('registerForm.changemaker') }}</div>
          </el-radio>
        </el-radio-group>
        <el-radio-group v-model="formSimple.type" style="display: block">
          <el-radio class="role" :label='4'>
            <img class="roleImg" src="/static/investor.png"></img>
            <div class="roleDes">{{ $t('registerForm.investor') }}</div>
          </el-radio>
          <el-radio class="role" :label='2'>
            <img class="roleImg" src="/static/other.png"></img>
            <div class="roleDes">{{ $t('registerForm.others') }}</div>
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button class="buttonRight" style="border: none;color: #279CFF;" @click="skip('formSimple')">{{ $t('registerForm.skip') }}</el-button>
      </el-form-item>
      <el-form-item>
        <el-p class="button" style="color: #B6B3B4;">{{ $t('registerForm.chooseMsg') }}</el-p>
      </el-form-item>
      <el-form-item>
        <el-button v-if="backStep < 2" class="back" @click="back('formSimple')">{{ $t('registerForm.back') }}</el-button>
        <el-button type="primary" class="buttonRight" @click="next('formSimple')">{{ $t('registerForm.next') }}</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="ruleForm" :rules="rules3" v-if="step===3" ref="ruleForm" label-width="150px" class="form3">
      <el-form-item v-if="formSimple.type == 1" :label="$t('registerForm.user')" prop="user" required>
        <el-input v-model="ruleForm.user" :placeholder="$t('registerForm.userMsg')" :maxlength='48'></el-input>
      </el-form-item>
      <el-form-item :label="$t('registerForm.name')" prop="name" required>
        <el-input v-model="ruleForm.name" :placeholder="$t('registerForm.nameMsg')" :maxlength='240'></el-input>
      </el-form-item>
      <el-form-item v-if="formSimple.type < 3" :label="$t('expertise')" prop="expertise" required>
        <el-input v-model="ruleForm.expertise" :maxlength='240'></el-input>
      </el-form-item>
      <el-form-item :label="$t('sector')" prop="sectors" required>
        <el-checkbox-group v-model="ruleForm.sectors">
          <el-checkbox label="1" name="sectors">{{ $t('registerForm.energy') }}</el-checkbox>
          <el-checkbox label="2" name="sectors">{{ $t('registerForm.finance') }}</el-checkbox>
          <el-checkbox label="3" name="sectors">{{ $t('registerForm.gender') }}</el-checkbox>
          <el-checkbox label="4" name="sectors">{{ $t('registerForm.education') }}</el-checkbox>
          <el-checkbox label="5" name="sectors">{{ $t('registerForm.environment') }}</el-checkbox>
          <el-checkbox label="6" name="sectors">{{ $t('registerForm.health') }}</el-checkbox>
          <el-checkbox label="7" name="sectors">{{ $t('registerForm.agriculture') }}</el-checkbox>
          <el-checkbox label=0 name="sectors" @change="sector()">{{ $t('registerForm.other') }}</el-checkbox>
          <el-form-item label="" prop="sectorInput ">
            <el-input v-if="sectorInput" v-model="ruleForm.sectorInput" :placeholder="$t('registerForm.sectorMsg')"></el-input>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type > 2" :label="$t('founded')" required>
        <el-col :span="15">
          <el-form-item prop="founded">
            <el-date-picker type="date" format="yyyy-MM-dd" :editable="false" :placeholder="$t('registerForm.foundedMsg')" v-model="ruleForm.founded" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item :label="$t('location')" prop="location">
        <el-input v-model="ruleForm.location" :placeholder="$t('registerForm.locationMsg')" :maxlength='240'></el-input>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('destination')" prop="destination">
        <el-input v-model="ruleForm.destination" :placeholder="$t('registerForm.destinationMsg')" :maxlength='240'></el-input>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('stage')" prop="stage">
        <el-radio-group v-model="ruleForm.stage">
          <el-radio label="1">{{ $t('idea') }}</el-radio>
          <el-radio label="2">{{ $t('start') }}</el-radio>
          <el-radio label="3">{{ $t('scaling') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('investStage')" prop="stage">
        <el-radio-group v-model="ruleForm.stage">
          <el-radio label="1">{{ $t('idea') }}</el-radio>
          <el-radio label="2">{{ $t('start') }}</el-radio>
          <el-radio label="3">{{ $t('scaling') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('budget')" prop="budget">
        <el-radio-group v-model="ruleForm.budget">
          <el-radio label="1">&lt;$10,000</el-radio>
          <el-radio label="2">$10,000-50,000</el-radio>
          <el-radio label="3">$50,000-100,000$</el-radio>
          <el-radio label="4">&gt;$100,000</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('investBudget')" prop="budget">
        <el-radio-group v-model="ruleForm.budget">
          <el-radio label="1">&lt;$10,000</el-radio>
          <el-radio label="2">$10,000-50,000</el-radio>
          <el-radio label="3">$50,000-100,000$</el-radio>
          <el-radio label="4">&gt;$100,000</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('staff')" prop="staff">
        <el-input v-model="ruleForm.staff" :maxlength='8'></el-input>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('returnRate')" prop="returnRate">
        <el-input v-model="ruleForm.returnRate" :maxlength='2' style="width: 100px"></el-input>&nbsp;&nbsp;&nbsp;%
      </el-form-item>
      <el-form-item v-if="formSimple.type > 2" :label="$t('funding')" prop="fundSources">
        <el-radio-group v-model="ruleForm.fundSources" @change="fundSource() ">
          <el-radio label="1">{{ $t('registerForm.grant') }}</el-radio>
          <el-radio label="2">{{ $t('registerForm.loan') }}</el-radio>
          <el-radio label="3">{{ $t('registerForm.equity') }}</el-radio>
          <el-radio label="4">{{ $t('registerForm.self') }}</el-radio>
          <el-radio label="0">{{ $t('registerForm.other') }}</el-radio>
        </el-radio-group>
        <el-form-item prop="fundSourceInput">
          <el-input v-if="fundSourceInput" v-model="ruleForm.fundSourceInput" :placeholder="$t('registerForm.fundingMsg')"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('registerForm.expect')" prop="expect">
        <el-radio-group v-model="ruleForm.expect">
          <el-radio :label="1">{{ $t('onlySocial') }}</el-radio>
          <el-radio :label="2">{{ $t('onlyEconomic') }}</el-radio>
          <el-radio :label="3">{{ $t('bothSocial') }}</el-radio>
          <el-radio :label="4">{{ $t('bothEconomic') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('registerForm.revenue')" prop="revenue">
        <el-switch on-text="yes" off-text="no" on-value="1" off-value="0" v-model="ruleForm.revenue"></el-switch>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('registerForm.assistance')" prop="assistances">
        <el-checkbox-group v-model="ruleForm.assistances">
          <el-checkbox label="1" name="assistances">{{ $t('registerForm.assis.business') }}</el-checkbox>
          <el-checkbox label="2" name="assistances">{{ $t('registerForm.assis.brand') }}</el-checkbox>
          <el-checkbox label="3" name="assistances">{{ $t('registerForm.assis.program') }}</el-checkbox>
          <el-checkbox label="4" name="assistances">{{ $t('registerForm.assis.impact') }}</el-checkbox>
          <el-checkbox label="5" name="assistances">{{ $t('registerForm.assis.market') }}</el-checkbox>
          <el-checkbox label="6" name="assistances">{{ $t('registerForm.assis.date') }}</el-checkbox>
          <el-checkbox label="7" name="assistances">{{ $t('registerForm.assis.partner') }}</el-checkbox>
          <el-checkbox label="8" name="assistances">{{ $t('registerForm.assis.human') }}</el-checkbox>
          <el-checkbox label="9" name="assistances">{{ $t('registerForm.assis.monitor') }}</el-checkbox>
          <el-checkbox label="0" name="assistances" @change="assistance()">{{ $t('registerForm.other') }}</el-checkbox>
          <el-form-item label="" prop="assistanceInput">
            <el-input v-if="assistanceInput" v-model="ruleForm.assistanceInput" :placeholder="$t('registerForm.assisMsg')"></el-input>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type > 1" :label="$t('desc')" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" :maxlength='480' :placeholder="$t('registerForm.descMsg')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('registerForm.resource')" prop="sources">
        <el-checkbox-group v-model="ruleForm.sources">
          <el-checkbox label="1" name="sources">{{ $t('registerForm.resources.website') }}</el-checkbox>
          <el-checkbox label="2" name="sources">{{ $t('registerForm.resources.media') }}</el-checkbox>
          <el-checkbox label="3" name="sources">{{ $t('registerForm.resources.social') }}</el-checkbox>
          <el-checkbox label="4" name="sources">{{ $t('registerForm.resources.invited') }}</el-checkbox>
          <el-checkbox label="5" name="sources">{{ $t('registerForm.resources.referred') }}</el-checkbox>
          <el-checkbox label="6" name="sources">{{ $t('registerForm.resources.conference') }}</el-checkbox>
          <el-checkbox label="0" name="sources" @change="source()">{{ $t('registerForm.other') }}</el-checkbox>
          <el-form-item label="" prop="sourceInput">
            <el-input v-if="sourceInput" v-model="ruleForm.sourceInput"></el-input>
          </el-form-item>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 3" :label="$t('plan')" prop="plan">
        <el-upload class="upload-demo" :http-request="upload" action="http://localhost:8066/test/utils/upload" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
          <el-button size="small" type="primary">{{ $t('registerForm.upload') }}</el-button>
          <div slot="tip" class="el-upload__tip">{{ $t('registerForm.planMsg1') }}</div>
          <div slot="tip" class="el-upload__tip">{{ $t('registerForm.planMsg2') }}</div>
        </el-upload>
      </el-form-item>
      <el-form-item v-if="formSimple.type > 2" :label="$t('registerForm.logo')" prop="logo">
        <el-upload class="upload-demo" action="/test/utils/upload" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="logoList">
          <el-button size="small" type="primary">{{ $t('registerForm.upload') }}</el-button>
          <div slot="tip" class="el-upload__tip">{{ $t('registerForm.logoMsg') }}</div>
        </el-upload>
      </el-form-item>
      <el-form-item v-if="formSimple.type == 4" :label="$t('registerForm.willing')" prop="rate">
        <div style="color: rgb(206, 229, 250)">{{ $t('registerForm.rate') }}</div>
        <div>&nbsp; </div>
        <div>{{ $t('registerForm.rate1') }}</div>
        <el-rate :max=9 v-model="ruleForm.rate1"></el-rate>
        <div>&nbsp; </div>
        <div>{{ $t('registerForm.rate2') }}</div>
        <el-rate :max=9 v-model="ruleForm.rate2"></el-rate>
        <div>&nbsp; </div>
        <div>{{ $t('registerForm.rate3') }}</div>
        <el-rate :max=9 v-model="ruleForm.rate3"></el-rate>
        <div>&nbsp; </div>
        <div>{{ $t('registerForm.rate4') }}</div>
        <el-rate :max=9 v-model="ruleForm.rate4"></el-rate>
      </el-form-item>
      <el-form-item>
        <el-button v-if="backStep < 3" @click="back('ruleForm')">{{ $t('registerForm.back') }}</el-button>
        <el-button type="primary" class="buttonRight" @click="submitForm('ruleForm')">{{ $t('registerForm.complete') }}</el-button>
      </el-form-item>
    </el-form>
    <div v-if="step > 3" class="complete">
      <img src="/static/complete.png" class="img"></img>
    </div>
  </div>
</template>

<script lang="babel">
  import Vue from 'vue'

  export default {
    props: [
      'index',
    ],
    data: function () {
      const checkEmail = (rule, value, callback) => {
        this.emailValid(value).then((data) => {
          if (data.errCode !== 'success') {
            callback(new Error(data.message))
          } else {
            callback()
          }
        },
        ).catch((e) => {
          callback(new Error(this.$t('error')))
        })
      }
      const checkConfirm = (rule, value, callback) => {
        if (value !== this.formSimple.password) {
          callback(new Error(this.$t('registerForm.confirmValid')))
        }
        callback()
      }
      const checkRole = (rule, value, callback) => {
        if (value === 0) {
          callback(new Error(this.$t('registerForm.chooseValid')))
        }
        callback()
      }
      const checkLeast = (rule, value, callback) => {
        console.log(value)
        if (value === null || value.length === 0) {
          callback(new Error(this.$t('registerForm.least')))
        }
        callback()
      }
      const validSector = (rule, value, callback) => {
        if (this.ruleForm.sectors.indexOf('0') !== -1 && value === '') {
          callback(new Error(this.$t('registerForm.sectorMsg')))
        }
        callback()
      }
      const validFundSource = (rule, value, callback) => {
        if (this.ruleForm.fundSources === '0' && value === '') {
          callback(new Error(this.$t('registerForm.fundingMsg')))
        }
        callback()
      }
      const validSource = (rule, value, callback) => {
        if (this.ruleForm.sources.indexOf('0') !== -1 && value === '') {
          callback(new Error(this.$t('registerForm.sourceMsg')))
        }
        callback()
      }
      const validAssistance = (rule, value, callback) => {
        if (this.ruleForm.assistances.indexOf('0') !== -1 && value === '') {
          callback(new Error(this.$t('registerForm.assisMsg')))
        }
        callback()
      }
      const validNumber = (rule, value, callback) => {
        if (!value.match(/^\d+$/)) {
          callback(new Error(this.$t('registerForm.numberMsg')))
        }
        callback()
      }
      return {
        sectorMap: {
          '1': 'renewable energy',
          '2': 'inclusive finance',
          '3': 'gender equity',
          '4': 'education',
          '5': 'environment',
          '6': 'health',
          '7': 'agriculture',
        },
        sectorInput: false,
        fundSourceMap: {
          '1': 'grant',
          '2': 'loan',
          '3': 'equity',
          '4': 'self',
        },
        fundSourceInput: false,
        sourceMap: {
          '1': 'website',
          '2': 'media',
          '3': 'social',
          '4': 'invited',
          '5': 'referred',
          '6': 'conference',
        },
        sourceInput: false,
        assistanceMap: {
          '1': 'business',
          '2': 'brand',
          '3': 'program',
          '4': 'impact',
          '5': 'market',
          '6': 'date',
          '7': 'partner',
          '8': 'human',
          '9': 'monitor',
        },
        assistanceInput: false,
        step: 1,
        backStep: 1,
        fileList: [],
        logoList: [],
        formSimple: {
          email: '',
          password: '',
          passwordConfirm: '',
          type: 0,
        },
        ruleForm: {
          name: '',
          sectors: [],
          sector: '',
          sectorInput: '',
          founded: '',
          location: '',
          stage: '',
          budget: '',
          staff: '',
          fundSource: '',
          fundSources: '',
          fundSourceInput: '',
          revenue: false,
          sources: [],
          source: '',
          sourceInput: '',
          plans: [],
          plan: '',
          logo: '',
          assistances: [],
          assistance: '',
          assistanceInput: '',
          desc: '',
          destination: '',
          returnRate: '',
          rate: '',
          rate1: 0,
          rate2: 0,
          rate3: 0,
          rate4: 0,
          expect: 0,
        },
        rules1: {
          email: [
            { required: true, message: ' ', trigger: 'blur' },
            { validator: checkEmail, trigger: 'blur' },
          ],
          password: [
            { required: true, message: ' ', trigger: 'blur' },
          ],
          passwordConfirm: [
            { required: true, message: ' ', trigger: 'blur' },
            { validator: checkConfirm, trigger: 'blur' },
          ],
        },
        rules2: {
          type: [
            { validator: checkRole, trigger: 'change' },
          ],
        },
        rules3: {
          name: [
            { required: true, message: ' ', trigger: 'blur' },
          ],
          sectors: [
            { validator: checkLeast, trigger: 'change' },
          ],
          sectorInput: [
            { validator: validSector, trigger: 'blur' },
          ],
          founded: [
            { type: 'date', required: true, message: ' ', trigger: 'change' },
          ],
          destination: [
            { required: true, message: ' ', trigger: 'blur' },
          ],
          stage: [
            { required: true, message: ' ', trigger: 'change' },
          ],
          returnRate: [
            { required: true, message: ' ', trigger: 'blur' },
            { validator: validNumber, trigger: 'blur' },
          ],
          expect: [
            { type: 'number', required: true, message: ' ', trigger: 'change' },
          ],
          budget: [
            { required: true, message: ' ', trigger: 'change' },
          ],
          staff: [
            { required: true, message: ' ', trigger: 'blur' },
            { validator: validNumber, trigger: 'blur' },
          ],
          fundSources: [
            { required: true, message: ' ', trigger: 'change' },
          ],
          fundSourceInput: [
            { validator: validFundSource, message: ' ', trigger: 'blur' },
          ],
          sources: [
            { validator: checkLeast, trigger: 'change' },
          ],
          sourceInput: [
            { validator: validSource, message: ' ', trigger: 'blur' },
          ],
          plans: [
          ],
          assistances: [
            { validator: checkLeast, trigger: 'change' },
          ],
          assistanceInput: [
            { validator: validAssistance, message: ' ', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: ' ', trigger: 'blur' },
          ],
        },
      }
    },
    created: function () {
      if (this.$route.query.step !== undefined && this.$route.query.step !== null) {
        this.step = parseInt(this.$route.query.step, 10)
      }
      this.backStep = this.step
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      sector() {
        console.log(this.ruleForm.sectors)
        if (this.ruleForm.sectors.indexOf('0') === -1) {
          this.sectorInput = false
        } else {
          this.sectorInput = true
        }
      },
      fundSource() {
        if (this.ruleForm.fundSources !== '0') {
          this.fundSourceInput = false
        } else {
          this.fundSourceInput = true
        }
      },
      upload: async function (val) {
        console.log(val.file)
        const response = await this.$ajax.post('/test/utils/upload', { file: val.file }, { headers: { 'Content-Type': 'multipart/form-data', 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' } })
        response.data.then((data) => {
          console.log(data)
        })
      },
      source() {
        if (this.ruleForm.sources.indexOf('0') === -1) {
          this.sourceInput = false
        } else {
          this.sourceInput = true
        }
      },
      assistance() {
        if (this.ruleForm.assistances.indexOf('0') === -1) {
          this.assistanceInput = false
        } else {
          this.assistanceInput = true
        }
      },
      submitDetail() {
        console.log(2)
        this.ruleForm.sector =
          this.transferArray(this.ruleForm.sectors, this.ruleForm.sectorInput, this.sectorMap)
        this.ruleForm.source =
          this.transferArray(this.ruleForm.sources, this.ruleForm.sourceInput, this.sourceMap)
        this.ruleForm.assistance =
          this.transferArray(this.ruleForm.assistances,
          this.ruleForm.assistanceInput, this.assistanceMap)
        this.ruleForm.fundSource =
          this.transferString(this.ruleForm.fundSources,
          this.ruleForm.fundSourceInput, this.fundSourceMap)
        let response = ''
        switch (this.formSimple.type) {
          case 1:
            response = this.registerIndividual()
            break
          case 2:
            response = this.registerOthers()
            break
          case 3:
            response = this.registerStartup()
            break
          case 4:
            response = this.registerInvestor()
            break
          default:
            this.$msgbox({
              title: this.$t('hint'),
              confirmButtonText: this.$t('confirm'),
              message: this.$t('registerForm.choose'),
            }).then((action) => {

            })
            return 0
        }
        return response.then((dataDetail) => {
          if (dataDetail.errCode === 'success') {
            this.step = 4
            return 1
          }
          this.$msgbox({
            title: this.$t('hint'),
            confirmButtonText: this.$t('confirm'),
            message: dataDetail.message,
          }).then((action) => {

          })
          return 0
        }).catch((e) => {
          this.$msgbox({
            title: this.$t('hint'),
            confirmButtonText: this.$t('confirm'),
            message: this.$t('error'),
          }).then((action) => {

          })
          return 0
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (sessionStorage.getItem('loginStatus') === '0') {
              this.registerSimple().then((data) => {
                if (data.errCode === 'success') {
                  this.$emit('admin', data.data)
                  sessionStorage.setItem('adminId', data.data.id)
                  sessionStorage.setItem('loginStatus', '1')
                  sessionStorage.setItem('type', data.data.type)
                  sessionStorage.setItem('rate', data.data.rate)
                  sessionStorage.setItem('email', data.data.email)
                  this.backStep = data.data.type === 0 ? 2 : 3
                  if (this.submitDetail() === 0) {
                    this.$msgbox({
                      title: this.$t('hint'),
                      confirmButtonText: this.$t('confirm'),
                      message: this.$t('registerEmailMsg'),
                    }).then((action) => {

                    })
                  }
                } else {
                  this.$msgbox({
                    title: this.$t('hint'),
                    confirmButtonText: this.$t('confirm'),
                    message: data.message,
                  }).then((action) => {

                  })
                }
              }).catch((e) => {
                this.$msgbox({
                  title: this.$t('hint'),
                  confirmButtonText: this.$t('confirm'),
                  message: this.$t('error'),
                }).then((action) => {

                })
              })
            } else {
              this.$ajax('/test/admin/login', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: { email: this.formSimple.email, password: this.formSimple.password } })
              this.submitDetail()
            }
          }
        })
      },
      transferArray(vals, valInput, valMap) {
        let result = ''
        if (vals.indexOf('0') !== -1) {
          result = valInput
        }
        const tmp = vals.filter(val => val !== '0').map(val => valMap[val]).join(',')
        if (tmp !== null && tmp !== '') {
          if (result !== null && result !== '') {
            result += ','
          }
          result += tmp
        }
        return result
      },
      transferString(val, valInput, valMap) {
        let result = ''
        if (val === '0') {
          result = valInput
        } else {
          result = valMap[val]
        }
        return result
      },
      emailValid: async function (email) {
        const response = await this.$ajax('/test/admin/validEmail', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: { email: email } })
        return response.data
      },
      registerSimple: async function () {
        const response = await this.$ajax('/test/admin/registerSimple', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: this.formSimple })
        return response.data
      },
      registerIndividual: async function () {
        const response = await this.$ajax('/test/individual/addIndividual', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: this.ruleForm })
        return response.data
      },
      registerOthers: async function () {
        const response = await this.$ajax('/test/others/addOthers', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: this.ruleForm })
        return response.data
      },
      registerStartup: async function () {
        const response = await this.$ajax('/test/startup/addStartup', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: this.ruleForm })
        return response.data
      },
      registerInvestor: async function () {
        this.ruleForm.rate = `${this.ruleForm.rate1},${this.ruleForm.rate2},${this.ruleForm.rate3},${this.ruleForm.rate4}`
        const response = await this.$ajax('/test/investor/addInvestor', { headers: { 'Accept-Language': Vue.config.lang === 'en' ? 'en-us' : 'zh-CN' }, params: this.ruleForm })
        return response.data
      },
      next(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false
          }
          this.step += 1
          return true
        })
      },
      back(formName) {
        console.log(this.step)
        this.step = this.step === 2 ? 1 : 2
      },
      skip(formName) {
        this.formSimple.type = 0
        this.registerSimple().then((data) => {
          if (data.errCode === 'success') {
            this.step = 4
          } else {
            console.log(data.message)
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      login() {
        this.$router.push({ path: '/login' })
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.registry {
  width: 800px;
  background: #282B2F;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  padding-top: 50px;
  color: white;
  .steps {
    padding-left: 30px;
  }
  .form {
    margin: 0 auto;
    width: 600px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .button {
      float: right;
      margin-right: 20%;
    }
    .buttonRight {
      float: right;
      margin-right: 15%;
    }
    .el-input {
      width: 80%;
    }
    .back {
      margin-left: 100px;
    }
  }
  .form2 {
    margin: 0 auto;
    width: 500px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 100px;
    .button {
      float: right;
      margin-right: 20%;
    }
    .buttonRight {
      float: right;
      margin-right: 20%;
    }
    .role {
      height: 100px;
      width: 200px;
      display: inline-block;
      .roleImg {
        padding-left: 50px;
        width: 80px;
        height: 80px;
        margin: 0 auto;
      }
      .roleDes {
        padding-left: 25px;
        text-align: center;
        padding-top: 10px;
      }
    }
  }
  .form3 {
    margin: 0 auto;
    width: 700px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .button {
      float: right;
      margin-right: 20%;
    }
    .buttonRight {
      float: right;
      margin-right: 15%;
    }
    .el-input {
      width: 75%;
    }
    .back {
      margin-left: 100px;
    }
  }
  .complete {
    margin: 0 auto;
    width: 450px;
    .img {
      padding: 50px 150px 50px 120px;
      height: 200px;
      width: 200px;
    }
  }
}
</style>
<style>
.el-form-item__label {
  color: white;
}

.form2 .el-radio {
  color: white;
}

.form3 .el-radio {
  color: #ff8a77;
}

.el-checkbox__label {
  color: #ff8a77;
}
</style>

