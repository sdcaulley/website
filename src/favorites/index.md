---
layout: 'layouts/base.html'
title: 'favorites'
eleventyExcludeFromCollections: true
---
<main>
    <h1>Favorites</h1>

    {% for favorite in favorites %}
        {% set name = favorite.name %}
        {% set type = favorite.type %}
        {% set description = favorite.description %}
        {% set url = favorite.url %}
        {% set image = favorite.image %}
        {% include "includes/favorites.html" %}
    {% endfor %}
</main>
