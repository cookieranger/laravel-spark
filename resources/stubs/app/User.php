<?php

namespace App;

use Laravel\Cashier\Billable;
use Laravel\Spark\Teams\CanJoinTeams;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as BaseUser;
use Laravel\Cashier\Contracts\Billable as BillableContract;
use Laravel\Spark\Auth\TwoFactor\Authenticatable as TwoFactorAuthenticatable;
use Laravel\Spark\Contracts\Auth\TwoFactor\Authenticatable as TwoFactorAuthenticatableContract;

class User extends BaseUser implements BillableContract,
                                       TwoFactorAuthenticatableContract
{
    use Billable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'name',
        'password',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'using_two_factor_auth'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'extra_billing_info',
        'last_four',
        'password',
        'remember_token',
        'stripe_id',
        'stripe_subscription',
        'two_factor_options',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'subscription_ends_at',
        'trial_ends_at',
    ];
}
