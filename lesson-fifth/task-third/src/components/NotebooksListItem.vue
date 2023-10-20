<template>
    <div class="card">
        <div class="card__image-wrapper">
            <a :href="cardData.link" class="card__image">
                <img :src="cardData.imgSrc" :alt="cardData.title">
            </a>
        </div>
        <div class="card__body">
            <a :href="cardData.link" class="card__title">{{ cardData.title }}</a>
            <div v-if="cardData.discount" class="card__discount">Ваша економія: <span>{{ cardData.discount }} ₴</span></div>
            <div class="card__footer">
                <div class="card__prices">
                    <div v-if="cardData.oldPrice" class="card__price card__price--old">{{ cardData.oldPrice }}₴</div>
                    <div class="card__price">{{ cardData.price }}₴</div>
                </div>
                <a :href="cardData.link" class="card__button">Купити</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotebooksListItem',
        props: {
            cardData: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style lang="css" scoped>
    .card {
        max-width: 500px;
        display: flex;
        border-bottom: 1px solid silver;
    }
    .card__image-wrapper {
        flex: 0 0 30%;
    }
    .card__image {
        display: block;
        padding-bottom: 100%;
        position: relative;
    }
    .card__image img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
    .card__body {
        display: flex;
        flex-direction: column;
        padding: 15px;
        flex: 1 1 auto;
    }
    .card__title {
        margin-bottom: 5px;
    }
    .card__discount {
        font-size: 10px;
        flex: 1 1 auto;
    }
    .card__discount span {
        color: red;
    }
    .card__footer {
        display: flex;
        justify-content: space-between;
    }
    .card__prices {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .card__price {
        color: red;
        font-size: 24px;
    }
    .card__price--old {
        color: silver;
        font-size: 20px;
        text-decoration: line-through;
    }
    .card__button {
        align-self: flex-end;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: green;
        color: #fff;
    }
</style>