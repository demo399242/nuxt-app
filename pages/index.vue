<template lang="pug">

v-sheet.mx-auto.mt-6.rounded-lg(
	style="overflow:hidden"
	width="350" 
)

	//- Заголовок
	v-sheet.mb-6.pa-3.text-h6.primary.text-center(
		dark
	) Авторизация
	v-row.mx-6.pt-3

		v-form(v-model="valid")

			//- Логин
			v-col.py-0(cols="12")
				v-text-field(
					v-model="userName"
					:rules="loginRules"
					label="Логин"
					placeholder="Логин"
					color="accent"
				)
					//- Препенд-иконка
					template(v-slot:prepend-inner)
						v-icon(size="24" style="margin-top: 0px;color: inherit") mdi-account

			//- Пароль
			v-col.py-0(cols="12")
				v-text-field(
					v-model="userPassword"
					:rules="passwordRules"
					:type="showPassword ? 'text' : 'password'"
					label="Пароль"
					placeholder="Пароль"
					color="accent"
				)
					//- Препенд-иконка
					template(v-slot:prepend-inner)
						v-icon(size="22" style="margin-top: 0px;color: inherit") mdi-lock
					//- Аппенд-иконка
					template(v-slot:append)
						v-icon(
							size="22" 
							tabindex="-1"
							style="margin-top: 1px" 
							@click='showPassword = !showPassword'
						) {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}

			//- Ошибка
			v-col(cols="12")
				div.error--text.text-caption(
					style="line-height:1rem;height:25px"
				) {{ apiError }}

			//- Кнопка "Войти"  
			v-col.mb-3(cols="12")
				v-btn(
					:disabled="!valid"
					@click="login()"
					color="accent"
					style="text-transform: none"
					block
				) Вход
	
</template>

<script>

export default {

	created() {
		// Правила валидации для логина
		this.loginRules = [
			v => !!v || "Введите логин",
		]
		// Правила валидации для пароля
		this.passwordRules = [
			v => !!v || "Введите пароль",
			//v => (v && v.length>=6) || "Минимум 6 символов",
		]
	},

	data() {
		return {
			// Логин и пароль
			userName: null,
			userPassword: null,
			// Сообщение об ошибке
			apiError: null,
			//- Валидация всей формы
			valid: true,
			// Флажок для показа пароля
			showPassword: false,
		}
	},

	methods: {

		login() {

			// Запрос к API
			this.$axios.$get('/user-login')
				.then(data => {
					// Если успех, то переход в режим "Профиль"
					if (data.success) 
						this.$router.push({ path: '/profile' })
					else 
						this.apiError = data.error
				})
				.catch(err => this.apiError = err)
		},

	}
}
</script>
