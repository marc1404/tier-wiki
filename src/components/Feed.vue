<style scoped>
    .articles, .article:not(:last-child) {
        border-bottom: 1px solid #dbdbdb;
    }

    .articles {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .article {
        display: block;
    }

    .article-content {
        display: flex;
        padding: 10px;
    }

    .article-thumbnail {
        min-width: 100px;
        width: 100px;
        max-width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
        margin-right: 1rem;
    }

    .article-text {
        flex-grow: 1;
    }

    .article-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 200px;
    }

    .article-published {
        float: right;
    }
</style>

<template>
    <div class="articles">
        <a :href="article.url" rel="noopener" target="_blank" class="article has-text-dark" v-for="article in enrichedArticles">
            <div class="article-content">
                <div class="article-thumbnail" :style="getThumbnailStyle(article.image)"></div>
                <div class="article-text">
                    <strong class="article-title is-block" :title="article.title">
                        {{ article.title }}
                    </strong>
                    <div>
                        <span :title="article.description">
                            {{ article.description.slice(0, 50).trim() }}&hellip;
                        </span>

                        <span class="article-published has-text-grey" :title="article.publishedReadable">
                            {{ article.publishedAgo }} ago
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
    import differenceInMinutes from 'date-fns/difference_in_minutes';
    import format from 'date-fns/format';

    export default {
        name: 'Feed',
        data: () => ({
            articles: []
        }),
        computed: {
            filteredArticles() {
                return this.articles.filter(article => !article.title.toLowerCase().includes('snail'));
            },
            enrichedArticles() {
                return this.filteredArticles.map(article => ({
                    title: article.title,
                    description: article.description,
                    publishedAgo: distanceInWordsToNow(article.publishedAt),
                    publishedReadable: format(article.publishedAt, 'D. MMMM YYYY HH:mm'),
                    image: article.urlToImage,
                    url: article.url
                }));
            }
        },
        methods: {
            getThumbnailStyle(image) {
                return {
                    backgroundImage: `url('${image}')`
                };
            }
        },
        async mounted() {
            const rawArticles = localStorage.getItem('articles');
            const rawLastFetch = localStorage.getItem('lastFetch');

            if (rawArticles && rawLastFetch) {
                const lastFetch = new Date(rawLastFetch);
                const minutes = differenceInMinutes(new Date(), lastFetch);

                if (minutes < 5) {
                    this.articles = JSON.parse(rawArticles);
                    return;
                }
            }

            const apiKey = '64314116bdfe4eeaa7c6a1ed2d286c62';
            const url = `https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            this.articles = data.articles;

            localStorage.setItem('articles', JSON.stringify(this.articles));
            localStorage.setItem('lastFetch', new Date().toISOString());
        }
    };
</script>
