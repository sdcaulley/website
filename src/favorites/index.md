---
layout: 'layouts/base.html'
title: 'favorites'
---
## Favorites

{% for favorite in favorites %}
 {% include "includes/favorites.html",
  name: favorite.name,
  type: favorite.type,
  description: favorite.description,
  image: favorite.image %}
{% endfor %}
