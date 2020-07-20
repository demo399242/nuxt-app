<template lang="pug">

//- Ошибка получения данных из API
v-sheet.mx-auto.mt-6.py-9.rounded-lg(
	v-if="!!apiError"
	style="overflow:hidden"
	width="500" 
)
	v-img.mx-auto.mb-6(
		max-width="100" 
		src="/alert.png" 
	)
	div.text-center.text-h5 {{ apiError }}

//- Информация о пользователе
v-sheet.mx-auto.mt-6.pb-6.rounded-lg(
	v-else
	style="overflow:hidden"
	width="600" 
)
	v-sheet.py-3.px-5.text-h6.primary(
		dark
	) 
		v-icon.mr-2 mdi-card-account-details-outline
		span Профиль
	
	v-sheet.ma-3
		v-row
			v-col(cols="4")
				v-img.rounded-circle.mx-auto(
					max-width="150"
					height="150" 
					:src="userInfo.image_url"
				)
			v-col.py-0(cols="8")
				v-row

					//- Имя
					v-col(cols="12") 
						span.text-h5 {{ userInfo.name }}

						//- Кнопка редактирования
						v-btn.float-right.pl-1(
							width="90" 
							style="text-transform: none"
							@click="lock=!lock"
							color="info"
							small
							outlined
						) 
							div.text-left(
								style="width:100%"
							)
								v-icon.mr-2(
									size="20"
									:color=" lock ? 'accent' : 'success'"
								) {{ lock ? "mdi-pen" : "mdi-check-bold" }}
								span {{ lock ? "Edit" : "Save" }}
							
						v-divider.mt-3

					//- Email
					v-col.py-2.text--secondary.text-subtitle-2(cols="3") Email
					v-col.py-0.text-body-1(cols="7")
						v-text-field.text-body-1(
							:value="userInfo.email"
							dense
							color="accent"
							hide-details
							:disabled="lock"
						)

					//- Страна
					v-col.py-2.text--secondary.text-subtitle-2(cols="3") Страна
					v-col.py-0.text-body-1(cols="7") 
						v-text-field.text-body-1(
							:value="userInfo.country"
							dense
							color="accent"
							hide-details
							:disabled="lock"
						)

					//- Город
					v-col.py-2.text--secondary.text-subtitle-2(cols="3") Город
					v-col.py-0.text-body-1(cols="7")
						v-text-field.text-body-1(
							:value="userInfo.city"
							dense
							color="accent"
							hide-details
							:disabled="lock"
						)

					//- Телефон
					v-col.py-2.text--secondary.text-subtitle-2(cols="3") Телефон
					v-col.py-0.text-body-1(cols="7") 
						v-text-field.text-body-1(
							:value="userInfo.phone"
							dense
							color="accent"
							hide-details
							:disabled="lock"
						)

</template>

<script>

// import { ref, computed } from "@vue/composition-api"

export default {
	
	data() {

		return {
			// Данные пользователя
			userInfo: {},
			// Ошибка выполнения API
			apiError: null,
			// Флажок редактирования профиля
			lock: true,
		}

	},

	created() {
		
		// Загрузка данных пользователя
		this.$axios.$get('/user-data')
			.then(data => this.userInfo = data)
			.catch(err => this.apiError = err)

	}

}
</script>

<style>
.theme--light.v-input--is-disabled input {
	color: rgba(0, 0, 0, 0.70);
}
</style>

