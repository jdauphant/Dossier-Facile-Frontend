<template>
  <div class="rf-container rf-container-full-size">
    <div class="bg-grey rf-grid-row full-height">
      <LeftEditMenu class="rf-col-md-3 rf-col-lg-2"></LeftEditMenu>
      <div
        class="rf-container rf-col-lg-7 rf-col-md-6 rf-col-xs-12 rf-grid-row rf-grid-row--center"
      >
        <div class="content rf-col-lg-10 rf-col-12">
          <div class="step rf-mb-5w" v-if="tenantStep <= 1">
            <div class="step-number">1</div>
            <div class="step-title">{{ $t("title-step1") }}</div>
          </div>
          <div class="step rf-mb-5w" v-if="tenantStep === 2">
            <div class="step-number">2</div>
            <div class="step-title">{{ $t("title-step2") }}</div>
          </div>
          <div class="step rf-mb-5w" v-if="tenantStep === 3">
            <div class="step-number">3</div>
            <div class="step-title">{{ $t("title-step3") }}</div>
          </div>
          <NameInformationForm
            :user="user"
            v-if="tenantStep === 0"
          ></NameInformationForm>
          <TenantInformationForm
            v-if="tenantStep === 1"
          ></TenantInformationForm>
          <UploadDocuments v-if="tenantStep === 2"></UploadDocuments>
          <GuarantorDocuments v-if="tenantStep === 3"></GuarantorDocuments>
          <ValidateFile v-if="tenantStep >= 4"></ValidateFile>
        </div>
      </div>
      <div class="rf-col-md-3 rf-col-xs-12 rf-p-2w">
        <EditSummary></EditSummary>
        <ProfileHelp></ProfileHelp>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftEditMenu from "@/components/LeftEditMenu.vue";
import EditSummary from "@/components/EditSummary.vue";
import ProfileHelp from "@/components/ProfileHelp.vue";
import NameInformationForm from "@/components/NameInformationForm.vue";
import { mapState } from "vuex";
import TenantInformationForm from "@/components/TenantInformationForm.vue";
import UploadDocuments from "@/components/UploadDocuments.vue";
import GuarantorDocuments from "@/components/GuarantorDocuments.vue";
import ValidateFile from "@/components/ValidateFile.vue";

@Component({
  components: {
    TenantInformationForm,
    ProfileHelp,
    EditSummary,
    LeftEditMenu,
    NameInformationForm,
    UploadDocuments,
    GuarantorDocuments,
    ValidateFile
  },
  computed: {
    ...mapState({
      user: "user",
      tenantStep: "tenantStep"
    })
  }
})
export default class Profile extends Vue {
  public tenantStep!: number;
}
</script>

<style lang="scss" scoped>
@import "df-shared/src/scss/_variables.scss";

.rf-container-full-size {
  padding-left: 0;
  padding-right: 0;
  max-width: 100%;
}

.full-height {
  min-height: 100%;
}

.content {
  padding: 2rem;
  max-width: 600px;
}

.step-number {
  padding: 1px;
  background-color: var(--primary);
  color: white;
  margin: 0 5px;
  border-radius: 50%;
  display: inline-block;
  height: 25px;
  width: 25px;
  min-width: 25px;
  text-align: center;
  z-index: 1;
}
.step {
  display: flex;
  align-items: center;
}
.step-title {
  font-size: 1.5rem;
}
.bg-grey {
  background-color: var(--g100);
}
</style>

<i18n>
{
"en": {
"title-step1": "I fulfill my information",
"title-step2": "I join my documents",
"title-step3": "I fulfill my guarantor"
},
"fr": {
"title-step1": "Je renseigne mes informations",
"title-step2": "Je joins mes documents",
"title-step3": "Je renseigne mon garant"
}
}
</i18n>
