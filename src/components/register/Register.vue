<template>
  <div class="registry">
    <el-steps :space="200" :active="step" center="true" align-center="true">
      <el-step title="基础信息" icon="document"></el-step>
      <el-step title="选择角色" icon="edit"></el-step>
      <el-step title="申请认证" icon="upload"></el-step>
    </el-steps>
    <el-form :model="ruleForm" :rules="rules1" v-if="step === 1" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="电子邮箱" prop="email">
      <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" placeholder="请输入登录密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="passwordConfirm">
      <el-input v-model="ruleForm.passwordConfirm" type="password" placeholder="请再输入一遍登录密码"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" class="button" @click="next('ruleForm')">下一步</el-button>
    </el-form-item>
    </el-form>
    <el-form :model="ruleForm" :rules="rules2" v-if="step === 2" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="选择角色" prop="type">
      <el-radio-group v-model="ruleForm.type" style="display: block;">
        <el-radio style="height: 50px;" label=1>初创社企  （运用商业手段，实现社会目的）</el-radio>
      </el-radio-group>
      <el-radio-group v-model="ruleForm.type" style="display: block">
        <el-radio style="height: 50px;" label=2>非营利组织   （未成立企业）</el-radio>
      </el-radio-group>
      <el-radio-group v-model="ruleForm.type" style="display: block">
        <el-radio style="height: 50px;" label=3>影响力投资者    （投资社企，并有一定回报率）</el-radio>
      </el-radio-group>
      <el-radio-group v-model="ruleForm.type" style="display: block">
        <el-radio style="height: 50px;" label=4>其他机构</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button class="button" style="border: none;color: #279CFF;" @click="skip('ruleForm')">暂时不选择，跳过</el-button>
    </el-form-item>
    <el-form-item>
      <el-p class="button" style="color: #B6B3B4;">选择角色并完成认证可以解锁更多功能哦&nbsp;&nbsp;&nbsp;&nbsp;</el-p>
    </el-form-item>
    <el-form-item style="padding-top: 20px">
      <el-button @click="back('ruleForm')">上一步</el-button>
      <el-button type="primary" class="button" @click="next('ruleForm')">下一步</el-button>
    </el-form-item>
    </el-form>
    <el-form :model="ruleForm" :rules="rules3" v-if="step === 3" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="机构名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入机构名称"></el-input>
    </el-form-item>
    <el-form-item label="影响领域" prop="impactArea">
      <el-checkbox-group v-model="ruleForm.impactArea">
        <el-checkbox label="可再生资源" name="impactArea"></el-checkbox>
        <el-checkbox label="小微金融" name="impactArea"></el-checkbox>
        <el-checkbox label="性别平等" name="impactArea"></el-checkbox>
        <el-checkbox label="教育" name="impactArea"></el-checkbox>
        <el-checkbox label="环境" name="impactArea"></el-checkbox>
        <el-checkbox label="健康" name="impactArea"></el-checkbox>
        <el-checkbox label="农业" name="impactArea"></el-checkbox>
        <el-checkbox label="其他，请注明" name="impactArea" @change="impactArea()"></el-checkbox>
        <el-form-item label="" prop="impactAreaInput">
          <el-input v-if="impactAreaInput" v-model="ruleForm.impactAreaInput"  placeholder="请输入影响领域"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="创立时间" required>
      <el-col :span="15">
        <el-form-item prop="createDate">
          <el-date-picker type="date" :editable="false" placeholder="选择日期" v-model="ruleForm.createDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="地点" prop="location">
      <el-input v-model="ruleForm.location" placeholder="请输入地点"></el-input>
    </el-form-item>
    <el-form-item label="项目进展" prop="stage">
      <el-radio-group v-model="ruleForm.stage">
        <el-radio label="1">设想期</el-radio>
        <el-radio label="2">初创期</el-radio>
        <el-radio label="3">发展期</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="年预算" prop="budget">
      <el-radio-group v-model="ruleForm.budget">
        <el-radio label="1"><10,000$</el-radio>
        <el-radio label="2">10,000 - 50,000$</el-radio>
        <el-radio label="3">50,000-100,000$</el-radio>
        <el-radio label="4">>100,000$</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="全职员工数量" prop="staff">
      <el-input v-model="ruleForm.staff" placeholder="请输入全职员工数量"></el-input>
    </el-form-item>
    <el-form-item label="资金来源" prop="fundSource">
      <el-radio-group v-model="ruleForm.fundSource" @change="fundSource()">
        <el-radio label="捐赠"></el-radio>
        <el-radio label="借贷"></el-radio>
        <el-radio label="股权投资"></el-radio>
        <el-radio label="自给"></el-radio>
        <el-radio label="其他，请注明"></el-radio>
      </el-radio-group>
      <el-form-item label="" prop="fundSourceInput">
          <el-input v-if="fundSourceInput" v-model="ruleForm.fundSourceInput"  placeholder="请输入资金来源"></el-input>
        </el-form-item>
    </el-form-item>
    <el-form-item label="是否产生收入" prop="profitable">
      <el-switch on-text="" off-text="" v-model="ruleForm.profitable"></el-switch>
    </el-form-item>
    <el-form-item label="如何得知Diinsider" prop="source">
      <el-checkbox-group v-model="ruleForm.source">
        <el-checkbox label="网站" name="source"></el-checkbox>
        <el-checkbox label="媒体报道" name="source"></el-checkbox>
        <el-checkbox label="社交媒体" name="source"></el-checkbox>
        <el-checkbox label="Diinsider媒体" name="source"></el-checkbox>
        <el-checkbox label="朋友／同事推荐" name="source"></el-checkbox>
        <el-checkbox label="活动会议" name="source"></el-checkbox>
        <el-checkbox label="其他，请注明" name="source" @change="source()"></el-checkbox>
        <el-form-item label="" prop="sourceInput">
          <el-input v-if="sourceInput" v-model="ruleForm.sourceInput"  placeholder="请输入获知渠道"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="计划书" prop="files">
      <el-upload class="upload-demo"
        action="https://www.baidu.com"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="ruleForm.files">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">请上传您的项目计划书，包含问题描述、解决方案、服务群体、竞争优势、收入来源、市场前景、竞争者分析、团队介绍、社会影响力指标</div>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="您需要哪方面的协助" prop="needs">
      <el-checkbox-group v-model="ruleForm.needs">
        <el-checkbox label="商业模式开发" name="needs"></el-checkbox>
        <el-checkbox label="品牌推广" name="needs"></el-checkbox>
        <el-checkbox label="融资" name="needs"></el-checkbox>
        <el-checkbox label="市场渠道" name="needs"></el-checkbox>
        <el-checkbox label="咨讯信息" name="needs"></el-checkbox>
        <el-checkbox label="合作机会" name="needs"></el-checkbox>
        <el-checkbox label="人力资源" name="needs"></el-checkbox>
        <el-checkbox label="其他，请注明" name="needs" @change="needs()"></el-checkbox>
        <el-form-item label="" prop="needsInput">
          <el-input v-if="needsInput" v-model="ruleForm.needsInput"  placeholder="请输入所需帮助"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="简单描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" placeholder="请简短描述一下您的项目，便于其他人搜索到您"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="back('ruleForm')">上一步</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
    </el-form-item>
  </el-form>
  <el-form :model="ruleForm" :rules="rules3" v-if="step === 4" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="机构名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入机构名称"></el-input>
    </el-form-item>
    <el-form-item label="影响领域" prop="impactArea">
      <el-checkbox-group v-model="ruleForm.impactArea">
        <el-checkbox label="可再生资源" name="impactArea"></el-checkbox>
        <el-checkbox label="小微金融" name="impactArea"></el-checkbox>
        <el-checkbox label="性别平等" name="impactArea"></el-checkbox>
        <el-checkbox label="教育" name="impactArea"></el-checkbox>
        <el-checkbox label="环境" name="impactArea"></el-checkbox>
        <el-checkbox label="健康" name="impactArea"></el-checkbox>
        <el-checkbox label="农业" name="impactArea"></el-checkbox>
        <el-checkbox label="其他，请注明" name="impactArea" @change="impactArea()"></el-checkbox>
        <el-form-item label="" prop="impactAreaInput">
          <el-input v-if="impactAreaInput" v-model="ruleForm.impactAreaInput"  placeholder="请输入影响领域"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="创立时间" required>
      <el-col :span="15">
        <el-form-item prop="createDate">
          <el-date-picker type="date" :editable="false" placeholder="选择日期" v-model="ruleForm.createDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="地点" prop="location">
      <el-input v-model="ruleForm.location" placeholder="请输入地点"></el-input>
    </el-form-item>
    <el-form-item label="项目进展" prop="stage">
      <el-radio-group v-model="ruleForm.stage">
        <el-radio label="1">设想期</el-radio>
        <el-radio label="2">初创期</el-radio>
        <el-radio label="3">发展期</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="年预算" prop="budget">
      <el-radio-group v-model="ruleForm.budget">
        <el-radio label="1"><10,000$</el-radio>
        <el-radio label="2">10,000 - 50,000$</el-radio>
        <el-radio label="3">50,000-100,000$</el-radio>
        <el-radio label="4">>100,000$</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="全职员工数量" prop="staff">
      <el-input v-model="ruleForm.staff" placeholder="请输入全职员工数量"></el-input>
    </el-form-item>
    <el-form-item label="资金来源" prop="fundSource">
      <el-radio-group v-model="ruleForm.fundSource" @change="fundSource()">
        <el-radio label="捐赠"></el-radio>
        <el-radio label="借贷"></el-radio>
        <el-radio label="股权投资"></el-radio>
        <el-radio label="自给"></el-radio>
        <el-radio label="其他，请注明"></el-radio>
      </el-radio-group>
      <el-form-item label="" prop="fundSourceInput">
          <el-input v-if="fundSourceInput" v-model="ruleForm.fundSourceInput"  placeholder="请输入资金来源"></el-input>
        </el-form-item>
    </el-form-item>
    <el-form-item label="是否产生收入" prop="profitable">
      <el-switch on-text="" off-text="" v-model="ruleForm.profitable"></el-switch>
    </el-form-item>
    <el-form-item label="如何得知Diinsider" prop="source">
      <el-checkbox-group v-model="ruleForm.source">
        <el-checkbox label="网站" name="source"></el-checkbox>
        <el-checkbox label="媒体报道" name="source"></el-checkbox>
        <el-checkbox label="社交媒体" name="source"></el-checkbox>
        <el-checkbox label="Diinsider媒体" name="source"></el-checkbox>
        <el-checkbox label="朋友／同事推荐" name="source"></el-checkbox>
        <el-checkbox label="活动会议" name="source"></el-checkbox>
        <el-checkbox label="其他，请注明" name="source" @change="source()"></el-checkbox>
        <el-form-item label="" prop="sourceInput">
          <el-input v-if="sourceInput" v-model="ruleForm.sourceInput"  placeholder="请输入获知渠道"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="计划书" prop="files">
      <el-upload class="upload-demo"
        action="https://www.baidu.com"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="ruleForm.files">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">请上传您的项目计划书，包含问题描述、解决方案、服务群体、竞争优势、收入来源、市场前景、竞争者分析、团队介绍、社会影响力指标</div>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="您需要哪方面的协助" prop="needs">
      <el-checkbox-group v-model="ruleForm.needs">
        <el-checkbox label="商业模式开发" name="needs"></el-checkbox>
        <el-checkbox label="品牌推广" name="needs"></el-checkbox>
        <el-checkbox label="融资" name="needs"></el-checkbox>
        <el-checkbox label="市场渠道" name="needs"></el-checkbox>
        <el-checkbox label="咨讯信息" name="needs"></el-checkbox>
        <el-checkbox label="合作机会" name="needs"></el-checkbox>
        <el-checkbox label="人力资源" name="needs"></el-checkbox>
        <el-checkbox label="其他，请注明" name="needs" @change="needs()"></el-checkbox>
        <el-form-item label="" prop="needsInput">
          <el-input v-if="needsInput" v-model="ruleForm.needsInput"  placeholder="请输入所需帮助"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="简单描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" placeholder="请简短描述一下您的项目，便于其他人搜索到您"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="back('ruleForm')">上一步</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
    </el-form-item>
  </el-form>
  <el-form :model="ruleForm" :rules="rules3" v-if="step === 5" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="机构名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入机构名称"></el-input>
    </el-form-item>
    <el-form-item label="影响领域" prop="impactArea">
      <el-checkbox-group v-model="ruleForm.impactArea">
        <el-checkbox label="可再生资源" name="impactArea"></el-checkbox>
        <el-checkbox label="小微金融" name="impactArea"></el-checkbox>
        <el-checkbox label="性别平等" name="impactArea"></el-checkbox>
        <el-checkbox label="教育" name="impactArea"></el-checkbox>
        <el-checkbox label="环境" name="impactArea"></el-checkbox>
        <el-checkbox label="健康" name="impactArea"></el-checkbox>
        <el-checkbox label="农业" name="impactArea"></el-checkbox>
        <el-checkbox label="其他，请注明" name="impactArea" @change="impactArea()"></el-checkbox>
        <el-form-item label="" prop="impactAreaInput">
          <el-input v-if="impactAreaInput" v-model="ruleForm.impactAreaInput"  placeholder="请输入影响领域"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="创立时间" required>
      <el-col :span="15">
        <el-form-item prop="createDate">
          <el-date-picker type="date" :editable="false" placeholder="选择日期" v-model="ruleForm.createDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="地点" prop="location">
      <el-input v-model="ruleForm.location" placeholder="请输入地点"></el-input>
    </el-form-item>
    <el-form-item label="项目进展" prop="stage">
      <el-radio-group v-model="ruleForm.stage">
        <el-radio label="1">设想期</el-radio>
        <el-radio label="2">初创期</el-radio>
        <el-radio label="3">发展期</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="年预算" prop="budget">
      <el-radio-group v-model="ruleForm.budget">
        <el-radio label="1"><10,000$</el-radio>
        <el-radio label="2">10,000 - 50,000$</el-radio>
        <el-radio label="3">50,000-100,000$</el-radio>
        <el-radio label="4">>100,000$</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="全职员工数量" prop="staff">
      <el-input v-model="ruleForm.staff" placeholder="请输入全职员工数量"></el-input>
    </el-form-item>
    <el-form-item label="资金来源" prop="fundSource">
      <el-radio-group v-model="ruleForm.fundSource" @change="fundSource()">
        <el-radio label="捐赠"></el-radio>
        <el-radio label="借贷"></el-radio>
        <el-radio label="股权投资"></el-radio>
        <el-radio label="自给"></el-radio>
        <el-radio label="其他，请注明"></el-radio>
      </el-radio-group>
      <el-form-item label="" prop="fundSourceInput">
          <el-input v-if="fundSourceInput" v-model="ruleForm.fundSourceInput"  placeholder="请输入资金来源"></el-input>
        </el-form-item>
    </el-form-item>
    <el-form-item label="是否产生收入" prop="profitable">
      <el-switch on-text="" off-text="" v-model="ruleForm.profitable"></el-switch>
    </el-form-item>
    <el-form-item label="如何得知Diinsider" prop="source">
      <el-checkbox-group v-model="ruleForm.source">
        <el-checkbox label="网站" name="source"></el-checkbox>
        <el-checkbox label="媒体报道" name="source"></el-checkbox>
        <el-checkbox label="社交媒体" name="source"></el-checkbox>
        <el-checkbox label="Diinsider媒体" name="source"></el-checkbox>
        <el-checkbox label="朋友／同事推荐" name="source"></el-checkbox>
        <el-checkbox label="活动会议" name="source"></el-checkbox>
        <el-checkbox label="其他，请注明" name="source" @change="source()"></el-checkbox>
        <el-form-item label="" prop="sourceInput">
          <el-input v-if="sourceInput" v-model="ruleForm.sourceInput"  placeholder="请输入获知渠道"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="计划书" prop="files">
      <el-upload class="upload-demo"
        action="https://www.baidu.com"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="ruleForm.files">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">请上传您的项目计划书，包含问题描述、解决方案、服务群体、竞争优势、收入来源、市场前景、竞争者分析、团队介绍、社会影响力指标</div>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="您需要哪方面的协助" prop="needs">
      <el-checkbox-group v-model="ruleForm.needs">
        <el-checkbox label="商业模式开发" name="needs"></el-checkbox>
        <el-checkbox label="品牌推广" name="needs"></el-checkbox>
        <el-checkbox label="融资" name="needs"></el-checkbox>
        <el-checkbox label="市场渠道" name="needs"></el-checkbox>
        <el-checkbox label="咨讯信息" name="needs"></el-checkbox>
        <el-checkbox label="合作机会" name="needs"></el-checkbox>
        <el-checkbox label="人力资源" name="needs"></el-checkbox>
        <el-checkbox label="其他，请注明" name="needs" @change="needs()"></el-checkbox>
        <el-form-item label="" prop="needsInput">
          <el-input v-if="needsInput" v-model="ruleForm.needsInput"  placeholder="请输入所需帮助"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="简单描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" placeholder="请简短描述一下您的项目，便于其他人搜索到您"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="back('ruleForm')">上一步</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
    </el-form-item>
  </el-form>
  <el-form :model="ruleForm" :rules="rules3" v-if="step === 6" ref="ruleForm" label-width="100px" class="form">
    <el-form-item label="机构名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入机构名称"></el-input>
    </el-form-item>
    <el-form-item label="影响领域" prop="impactArea">
      <el-checkbox-group v-model="ruleForm.impactArea">
        <el-checkbox label="可再生资源" name="impactArea"></el-checkbox>
        <el-checkbox label="小微金融" name="impactArea"></el-checkbox>
        <el-checkbox label="性别平等" name="impactArea"></el-checkbox>
        <el-checkbox label="教育" name="impactArea"></el-checkbox>
        <el-checkbox label="环境" name="impactArea"></el-checkbox>
        <el-checkbox label="健康" name="impactArea"></el-checkbox>
        <el-checkbox label="农业" name="impactArea"></el-checkbox>
        <el-checkbox label="其他，请注明" name="impactArea" @change="impactArea()"></el-checkbox>
        <el-form-item label="" prop="impactAreaInput">
          <el-input v-if="impactAreaInput" v-model="ruleForm.impactAreaInput"  placeholder="请输入影响领域"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="创立时间" required>
      <el-col :span="15">
        <el-form-item prop="createDate">
          <el-date-picker type="date" :editable="false" placeholder="选择日期" v-model="ruleForm.createDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="地点" prop="location">
      <el-input v-model="ruleForm.location" placeholder="请输入地点"></el-input>
    </el-form-item>
    <el-form-item label="项目进展" prop="stage">
      <el-radio-group v-model="ruleForm.stage">
        <el-radio label="1">设想期</el-radio>
        <el-radio label="2">初创期</el-radio>
        <el-radio label="3">发展期</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="年预算" prop="budget">
      <el-radio-group v-model="ruleForm.budget">
        <el-radio label="1"><10,000$</el-radio>
        <el-radio label="2">10,000 - 50,000$</el-radio>
        <el-radio label="3">50,000-100,000$</el-radio>
        <el-radio label="4">>100,000$</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="全职员工数量" prop="staff">
      <el-input v-model="ruleForm.staff" placeholder="请输入全职员工数量"></el-input>
    </el-form-item>
    <el-form-item label="资金来源" prop="fundSource">
      <el-radio-group v-model="ruleForm.fundSource" @change="fundSource()">
        <el-radio label="捐赠"></el-radio>
        <el-radio label="借贷"></el-radio>
        <el-radio label="股权投资"></el-radio>
        <el-radio label="自给"></el-radio>
        <el-radio label="其他，请注明"></el-radio>
      </el-radio-group>
      <el-form-item label="" prop="fundSourceInput">
          <el-input v-if="fundSourceInput" v-model="ruleForm.fundSourceInput"  placeholder="请输入资金来源"></el-input>
        </el-form-item>
    </el-form-item>
    <el-form-item label="是否产生收入" prop="profitable">
      <el-switch on-text="" off-text="" v-model="ruleForm.profitable"></el-switch>
    </el-form-item>
    <el-form-item label="如何得知Diinsider" prop="source">
      <el-checkbox-group v-model="ruleForm.source">
        <el-checkbox label="网站" name="source"></el-checkbox>
        <el-checkbox label="媒体报道" name="source"></el-checkbox>
        <el-checkbox label="社交媒体" name="source"></el-checkbox>
        <el-checkbox label="Diinsider媒体" name="source"></el-checkbox>
        <el-checkbox label="朋友／同事推荐" name="source"></el-checkbox>
        <el-checkbox label="活动会议" name="source"></el-checkbox>
        <el-checkbox label="其他，请注明" name="source" @change="source()"></el-checkbox>
        <el-form-item label="" prop="sourceInput">
          <el-input v-if="sourceInput" v-model="ruleForm.sourceInput"  placeholder="请输入获知渠道"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="计划书" prop="files">
      <el-upload class="upload-demo"
        action="https://www.baidu.com"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="ruleForm.files">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">请上传您的项目计划书，包含问题描述、解决方案、服务群体、竞争优势、收入来源、市场前景、竞争者分析、团队介绍、社会影响力指标</div>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="您需要哪方面的协助" prop="needs">
      <el-checkbox-group v-model="ruleForm.needs">
        <el-checkbox label="商业模式开发" name="needs"></el-checkbox>
        <el-checkbox label="品牌推广" name="needs"></el-checkbox>
        <el-checkbox label="融资" name="needs"></el-checkbox>
        <el-checkbox label="市场渠道" name="needs"></el-checkbox>
        <el-checkbox label="咨讯信息" name="needs"></el-checkbox>
        <el-checkbox label="合作机会" name="needs"></el-checkbox>
        <el-checkbox label="人力资源" name="needs"></el-checkbox>
        <el-checkbox label="其他，请注明" name="needs" @change="needs()"></el-checkbox>
        <el-form-item label="" prop="needsInput">
          <el-input v-if="needsInput" v-model="ruleForm.needsInput"  placeholder="请输入所需帮助"></el-input>
        </el-form-item>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="简单描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" placeholder="请简短描述一下您的项目，便于其他人搜索到您"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="back('ruleForm')">上一步</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
    </el-form-item>
  </el-form>
  <div v-if="step > 6" class="complete">
    <img src="/static/complete.png" class="img"></img>
  </div>
  </div>
</template>

<script lang="babel">

  export default {
    props: {
      index: String,
    },
    data: function () {
      const checkPassword = (rule, value, callback) => {
        if (value !== this.ruleForm.password) {
          callback(new Error('两次密码不一致'))
        }
        callback()
      }
      const validImpactArea = (rule, value, callback) => {
        if (this.ruleForm.impactArea.indexOf('其他，请注明') !== -1 && value === '') {
          callback(new Error('请输入影响领域'))
        }
        callback()
      }
      const validFundSource = (rule, value, callback) => {
        if (this.ruleForm.fundSource.indexOf('其他，请注明') !== -1 && value === '') {
          callback(new Error('请输入资金来源'))
        }
        callback()
      }
      const validSource = (rule, value, callback) => {
        if (this.ruleForm.source.indexOf('其他，请注明') !== -1 && value === '') {
          callback(new Error('请输入获知渠道'))
        }
        callback()
      }
      const validNeeds = (rule, value, callback) => {
        if (this.ruleForm.needs.indexOf('其他，请注明') !== -1 && value === '') {
          callback(new Error('请输入所需协助'))
        }
        callback()
      }
      return {
        impactAreaInput: false,
        fundSourceInput: false,
        sourceInput: false,
        needsInput: false,
        step: 3,
        fileList: [],
        ruleForm: {
          email: '',
          password: '',
          passwordConfirm: '',
          type: 1,
          name: '',
          impactArea: [],
          impactAreaInput: '',
          createDate: '',
          location: '',
          stage: '',
          budget: '',
          staff: '',
          fundSource: '',
          fundSourceInput: '',
          profitable: false,
          source: [],
          sourceInput: '',
          files: [],
          needs: [],
          needsInput: '',
          desc: '',
        },
        rules1: {
          email: [
            { required: true, message: '电子邮箱不能为空', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '登录密码不能为空', trigger: 'blur' },
          ],
          passwordConfirm: [
            { required: true, message: '两次密码不一致', trigger: 'blur' },
            { validator: checkPassword },
          ],
        },
        rules2: {
          type: [
            { required: true, message: '若不选择角色请点击跳过', trigger: 'change' },
          ],
        },
        rules3: {
          name: [
            { required: true, message: '请输入机构名称', trigger: 'blur' },
            { min: 0, max: 100, message: '不要超过100个字符', trigger: 'blur' },
          ],
          impactArea: [
            { type: 'array', required: true, message: '请至少选择一个影响领域', trigger: 'change' },
          ],
          impactAreaInput: [
            { validator: validImpactArea, message: '请输入影响领域', trigger: 'blur' },
          ],
          createDate: [
            { type: 'date', required: true, message: '请选择创建日期', trigger: 'change' },
          ],
          location: [
            { required: true, message: '地点不能为空', trigger: 'blur' },
            { min: 0, max: 100, message: '不要超过100个字符', trigger: 'blur' },
          ],
          stage: [
            { required: true, message: '请选择项目进展', trigger: 'change' },
          ],
          budget: [
            { required: true, message: '请选择年预算', trigger: 'change' },
          ],
          staff: [
            { required: true, message: '全职员工数量不能为空', trigger: 'blur' },
            { pattern: /^\d+$/, message: '请输入数字', trigger: 'blur' },
          ],
          fundSource: [
            { required: true, message: '请选择资金来源', trigger: 'change' },
          ],
          fundSourceInput: [
            { validator: validFundSource, message: '请输入资金来源', trigger: 'blur' },
          ],
          source: [
            { type: 'array', required: true, message: '至少请选择一个获知渠道', trigger: 'change' },
          ],
          sourceInput: [
            { validator: validSource, message: '请输入获知渠道', trigger: 'blur' },
          ],
          files: [
          ],
          needs: [
            { type: 'array', required: true, message: '请至少选择一个需求', trigger: 'change' },
          ],
          needsInput: [
            { validator: validNeeds, message: '请输入需求', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '请填写简单描述', trigger: 'blur' },
          ],
        },
      }
    },
    computed: {
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      impactArea() {
        if (this.ruleForm.impactArea.indexOf('其他，请注明') === -1) {
          this.impactAreaInput = false
        } else {
          this.impactAreaInput = true
        }
      },
      fundSource() {
        if (this.ruleForm.fundSource !== '其他，请注明') {
          this.fundSourceInput = false
        } else {
          this.fundSourceInput = true
        }
      },
      source() {
        if (this.ruleForm.source.indexOf('其他，请注明') === -1) {
          this.sourceInput = false
        } else {
          this.sourceInput = true
        }
      },
      needs() {
        if (this.ruleForm.needs.indexOf('其他，请注明') === -1) {
          this.needsInput = false
        } else {
          this.needsInput = true
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false
          }
          this.step = 7
          return true
        })
      },
      next(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false
          }
          console.log(this.ruleForm.type)
          if (this.step === 1) {
            this.step = 2
          } else if (this.step === 2) {
            this.step += parseInt(this.ruleForm.type, 10)
          } else {
            this.step = 7
          }
          console.log(this.step)
          return true
        })
      },
      back(formName) {
        this.step = this.step === 2 ? 1 : 2
      },
      skip(formName) {
        this.step = 7
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
    filters: {
    },
  }
</script>

<style lang="scss" scoped>
.registry {
  padding-top: 50px;
  .form {
    background: white;
    margin: 0 auto;
    max-width: 450px;
    padding-top: 2rem;
    .button {
      float: right;
      margin-right: 20%;
    }
    .el-input {
      width: 80%;
    }
  }
  .complete {
    background: white;
    margin: 0 auto;
    max-width: 450px;
    .img {
      padding: 50px 150px 0 120px;
      height: 200px;
      width: 200px;
    }
  }
  
}
</style>
