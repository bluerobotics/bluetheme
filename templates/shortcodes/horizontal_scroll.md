<div style="overflow-x:auto;">{% if width %}<div style="width:{{ width }};">{% endif %}
  {{ body | markdown }}
{% if width %}</div>{% endif %}</div>
