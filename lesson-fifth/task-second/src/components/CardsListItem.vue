<template>
    <a :href="cardData.link" class="card">
        <div class="card__image">
            <img :src="cardData.imgSrc" :alt="cardData.description" />
        </div>
        <div class="card__body">
            <div class="card__info">
                <div class="card__company">
                    <div class="card__logo-company">
                        <img :src="cardData.logo" :alt="cardData.companyTitle" />
                    </div>
                    {{ cardData.companyTitle }}
                </div>
                <span v-if="cardData.productInStock" class="card__availability">В наявності</span>
            </div>
            <div class="card__title">{{ cardData.description }}</div>
        </div>
    </a>
</template>

<script>
export default {
    name: "CardsListItem",
    props: {
        cardData: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style lang="css" scoped>
.card {
    display: block;
    max-width: 200px;
    color: inherit;
    text-decoration: none;
}
.card__image {
    position: relative;
    padding-bottom: 100%;
    border-radius: 20px;
    overflow: hidden;
}
.card__image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .3s;
}
.card__image:hover img {
    transform: scale(1.1);
}
.card__body {
    padding: 5px;
}
.card__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    gap: 5px;
}
.card__company {
    display: flex;
    align-items: center;
    gap: 5px;
}
.card__logo-company {
    width: 20px;
    height: 20px;
    flex: 0 0 auto;
}
.card__availability {
    color: green;
}
.card__title {
    display: block;
    text-align: left;
}
.card__title:hover {
    text-decoration: underline;
}
</style>
