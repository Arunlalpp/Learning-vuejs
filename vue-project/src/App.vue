<script >
export default {
  name: "App",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSets: [],
        yearsOfExperience: "",
        age: null,
      },
    };
  },
  methods: {
    submitForms(event) {
      event.preventDefault();
      console.log("form values", this.formValues);
    },
  },
};
</script>

<template>
  <div>
    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
  </div>
  <form @submit="submitForms">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name" />
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Singapore">Singapore</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Singapore">Singapore</option>
      </select>
    </div>

    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work</label>
    </div>

    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSets"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        value="css"
        id="css"
        v-model="formValues.skillSets"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        value="javascript"
        id="javascript"
        v-model="formValues.skillSets"
      />
      <label for="javascript">Javascript</label>
    </div>

    <div>
      <label for="">Years of experience</label>
      <input
        type="radio"
        value="0-2"
        id="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        value="3-5"
        id="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        value="6-10"
        id="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">6-10</label>
      <input
        type="radio"
        value="10+"
        id="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>

    <div>
      <label for="age">Age</label
      ><input
        @keyup="submitForms"
        type="number"
        id="age"
        v-model="formValues.age"
      />
    </div>

    <!-- <div>
      <button>Submit</button>
    </div> -->
  </form>
</template>

<style>
#app {
  color: black;
  margin-top: 60px;
  /* text-align: center; */
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
}
</style>
