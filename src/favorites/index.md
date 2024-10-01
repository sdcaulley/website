---
layout: 'layouts/base.html'
title: 'favorites'
eleventyExcludeFromCollections: true
---
<main>
    <h1>Favorites</h1>

    {% for favorite in favorites %}
        {% include "includes/favorites.html",
            name: favorite.name,
            type: favorite.type,
            description: favorite.description,
            url: favorite.url,
            image: favorite.image %}
    {% endfor %}
</main>
