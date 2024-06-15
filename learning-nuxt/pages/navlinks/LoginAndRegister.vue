<template>
    <div class="main-container">
        <div class="login-container" ref="container">
            <div class="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <NuxtLink to="/"><button>Sign Up</button></NuxtLink>
                </form>
            </div>
            <div class="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <NuxtLink>
                        <p class="forget-password">Forget Your Password?</p>
                    </NuxtLink>
                    <NuxtLink to="/"><button>Sign In</button></NuxtLink>
                </form>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button class="hidden" ref="loginBtn">Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button class="hidden" ref="registerBtn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useEventListener } from '@vueuse/core';

export default {
    setup() {
        const registerBtn = ref(null);
        const container = ref(null);
        const loginBtn = ref(null);

        onMounted(() => {
            if (registerBtn.value) {
                useEventListener(registerBtn.value, "click", () => {
                    container.value.classList.add("active");
                });
            }

            if (loginBtn.value) {
                useEventListener(loginBtn.value, "click", () => {
                    container.value.classList.remove("active");
                });
            }
        });

        return {
            registerBtn,
            container,
            loginBtn
        };
    }
};

definePageMeta({
    layout: false,

})
</script>
