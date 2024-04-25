# Generated by Django 5.0.1 on 2024-04-23 17:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='nickname',
            field=models.CharField(max_length=100, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
    ]
